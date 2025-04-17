import moment from "moment-timezone";
import { Document, Schema, Types, model } from "mongoose";
import { COLLECTION_NAMES, RequestAction } from "../config/constants";

export interface IAuditLog extends Document {
    documentId: Types.ObjectId;
    action: RequestAction;
    payload: Record<string, any>;
    performedBy: Types.ObjectId;
    timestamp: Date;
    restEndpoint: string;
    reason?: string;
}

const AuditLogSchema = new Schema<IAuditLog>(
    {
        documentId: { type: Schema.Types.ObjectId, required: true },
        action: {
            type: String,
            enum: Object.values(RequestAction),
            message: "Invalid action",
            required: true,
        },
        payload: { type: Schema.Types.Mixed, required: true },
        performedBy: { type: Schema.Types.ObjectId, required: true },
        restEndpoint: { type: String, required: true },
        reason: { type: String },
    }, { timestamps: true }
);

const transformDates = (_: any, ret: any) => {
    ['createdAt', 'updatedAt'].forEach((key) => {
        if (ret[key]) {
            ret[key] = moment(ret[key]).tz('Asia/Kolkata').format('DD/MM/YYYY | HH:mm');
        }
    });
    delete ret.__v;
    return ret;
};

AuditLogSchema.set('toJSON', { transform: transformDates });
AuditLogSchema.set('toObject', { transform: transformDates });

export const LeadMaster = model<IAuditLog>(COLLECTION_NAMES.LEAD, AuditLogSchema);

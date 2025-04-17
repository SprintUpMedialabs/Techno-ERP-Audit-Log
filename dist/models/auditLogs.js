"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeadMaster = void 0;
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const mongoose_1 = require("mongoose");
const constants_1 = require("../config/constants");
const AuditLogSchema = new mongoose_1.Schema({
    documentId: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    action: {
        type: String,
        enum: Object.values(constants_1.RequestAction),
        message: "Invalid action",
        required: true,
    },
    payload: { type: mongoose_1.Schema.Types.Mixed, required: true },
    performedBy: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    restEndpoint: { type: String, required: true },
    reason: { type: String },
}, { timestamps: true });
const transformDates = (_, ret) => {
    ['createdAt', 'updatedAt'].forEach((key) => {
        if (ret[key]) {
            ret[key] = (0, moment_timezone_1.default)(ret[key]).tz('Asia/Kolkata').format('DD/MM/YYYY | HH:mm');
        }
    });
    delete ret.__v;
    return ret;
};
AuditLogSchema.set('toJSON', { transform: transformDates });
AuditLogSchema.set('toObject', { transform: transformDates });
exports.LeadMaster = (0, mongoose_1.model)(constants_1.COLLECTION_NAMES.LEAD, AuditLogSchema);

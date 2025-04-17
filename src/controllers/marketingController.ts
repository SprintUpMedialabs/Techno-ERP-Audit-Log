import expressAsyncHandler from "express-async-handler";
import { Request, Response } from "express";
import { auditLogRequestSchema } from "../validators/auditLogRequest";
import createHttpError from "http-errors";
import { LeadMaster } from "../models/auditLogs";
import { formatResponse } from "../utils/formatResponse";
import { objectIdSchema } from "../validators/commonValidators";


export const createLeadLog = expressAsyncHandler(async (req: Request, res: Response) => {
    const validationResult = auditLogRequestSchema.safeParse(req.body);
    if (!validationResult.success) {
        throw createHttpError(400, validationResult.error.errors[0]);
    }

    const { documentId, action, payload, performedBy, restEndpoint, reason } = validationResult.data;

    await LeadMaster.create({
        documentId,
        action,
        payload,
        performedBy,
        restEndpoint,
        reason
    });

    formatResponse(res, 200, "Lead log created successfully", true);
});

export const getLeadLog = expressAsyncHandler(async (req: Request, res: Response) => {
    const { documentId } = req.params;
    const validationResult = objectIdSchema.safeParse(documentId);
    if (!validationResult.success) {
        throw createHttpError(400, validationResult.error.errors[0]);
    }
    const leadLog = await LeadMaster.find({ documentId });
    formatResponse(res, 200, "Lead log fetched successfully", true, leadLog);
});


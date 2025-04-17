"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auditLogRequestSchema = void 0;
const zod_1 = require("zod");
const constants_1 = require("../config/constants");
const commonValidators_1 = require("./commonValidators");
exports.auditLogRequestSchema = zod_1.z.object({
    documentId: commonValidators_1.objectIdSchema,
    action: zod_1.z.nativeEnum(constants_1.RequestAction),
    payload: zod_1.z.record(zod_1.z.any()),
    performedBy: commonValidators_1.objectIdSchema,
    restEndpoint: zod_1.z.string().nonempty('Rest endpoint cannot be empty'),
    reason: zod_1.z.string().optional(),
});

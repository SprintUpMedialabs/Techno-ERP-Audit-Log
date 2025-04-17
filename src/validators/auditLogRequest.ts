import { z } from "zod";

import { RequestAction } from "../config/constants";
import { objectIdSchema } from "./commonValidators";

export const auditLogRequestSchema = z.object({
    documentId: objectIdSchema,
    action: z.nativeEnum(RequestAction),
    payload: z.record(z.any()),
    performedBy: objectIdSchema,
    restEndpoint: z.string().nonempty('Rest endpoint cannot be empty'),
    reason: z.string().optional(),
});
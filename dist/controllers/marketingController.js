"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLeadLog = exports.createLeadLog = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const auditLogRequest_1 = require("../validators/auditLogRequest");
const http_errors_1 = __importDefault(require("http-errors"));
const auditLogs_1 = require("../models/auditLogs");
const formatResponse_1 = require("../utils/formatResponse");
const commonValidators_1 = require("../validators/commonValidators");
exports.createLeadLog = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const validationResult = auditLogRequest_1.auditLogRequestSchema.safeParse(req.body);
    if (!validationResult.success) {
        throw (0, http_errors_1.default)(400, validationResult.error.errors[0]);
    }
    const { documentId, action, payload, performedBy, restEndpoint, reason } = validationResult.data;
    yield auditLogs_1.LeadMaster.create({
        documentId,
        action,
        payload,
        performedBy,
        restEndpoint,
        reason
    });
    (0, formatResponse_1.formatResponse)(res, 200, "Lead log created successfully", true);
}));
exports.getLeadLog = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { documentId } = req.params;
    const validationResult = commonValidators_1.objectIdSchema.safeParse(documentId);
    if (!validationResult.success) {
        throw (0, http_errors_1.default)(400, validationResult.error.errors[0]);
    }
    const leadLog = yield auditLogs_1.LeadMaster.find({ documentId });
    (0, formatResponse_1.formatResponse)(res, 200, "Lead log fetched successfully", true, leadLog);
}));

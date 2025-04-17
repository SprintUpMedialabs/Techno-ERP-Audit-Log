import mongoose from "mongoose";
import { z } from "zod";

export const objectIdSchema = z.custom<mongoose.Types.ObjectId>(
    (id) => {
        return mongoose.Types.ObjectId.isValid(id)
    },
    { message: "This is not a valid ObjectId" }
);
const { z } = require("zod");

exports.taskSchema = z.object({
    title: z.string().min(1).max(255),
});

const { z } = require('zod');

const taskSchema = z.object({
    title: z.string().trim().min(1, "Title cannot be empty"),
    description: z.string().trim().min(1, "Description cannot be empty"),
    completed: z.boolean(),
    priority: z.enum(['low', 'medium', 'high']).optional()
});


module.exports = { taskSchema };
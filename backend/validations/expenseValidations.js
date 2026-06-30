import { z } from "zod"

export const expenseSchema = z.object({
    amount: z.number().positive(),
    description: z.string().min(1),
    category: z.string().min(1)
});
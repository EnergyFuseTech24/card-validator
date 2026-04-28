import { z } from "zod";

export const cardSchema = z.object({
  cardNumber: z
    .string()
    .min(12, "Card number too short")
    .max(19, "Card number too long")
    .regex(/^\d+$/, "Card number must contain only digits"),
});
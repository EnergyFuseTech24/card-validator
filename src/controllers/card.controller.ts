import { Request, Response } from "express";
import { isValidCard, detectCardType } from "../services/card.service";

export const validateCard = (req: Request, res: Response) => {
  const { cardNumber } = req.body;

  const valid = isValidCard(cardNumber);

  if (!valid) {
    return res.status(200).json({
      valid: false,
      cardType: "Unknown",
    });
  }

  const cardType = detectCardType(cardNumber);

  return res.status(200).json({
    valid: true,
    cardType,
  });
};
import { Router } from "express";
import { validateCard } from "../controllers/card.controller";
import { validate } from "../middlewares/validate";
import { cardSchema } from "../validators/card.schema";

const router = Router();

router.post("/validate-card", validate(cardSchema), validateCard);

export default router;
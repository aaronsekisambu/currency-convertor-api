import express from "express";
import { exchangeRate } from "../controllers/index";

export const router = express.Router();

router.get("/api/v1/rates", exchangeRate.getAll);
router.get("/api/v1/rates/exchange", exchangeRate.getExchangeRate);
router.get("/api/v1/currencies", exchangeRate.getAllCurrencies);

// export default router;

import { Router } from "express";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import BaeData from "../models/baeData.model.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { type = "supporters" } = req.query;

    const data = await BaeData.findOne({ type });

    return res.json({
      statusCode: 200,
      success: true,
      data,
    });
  } catch (error) {
    return res.status(400).json({
      statusCode: 400,
      success: false,
      message: error.message || "Failed to get data",
    });
  }
});

export default router;

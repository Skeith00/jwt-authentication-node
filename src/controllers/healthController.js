import { Router } from "express";
const router = Router();

// Service to test Authentication
router.get(async (req, res, next) => {
  res.status(200).send("Service is Up.");
});

export default router;
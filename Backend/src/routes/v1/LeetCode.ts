import { Router } from "express";
import {
  getLeetCodeInfo,
  getRecentProblems,
} from "../../controllers/leetCode.controller";

export const LeetCodeRouter = Router();

LeetCodeRouter.get("/info", getLeetCodeInfo);
LeetCodeRouter.get("/recentProblems", getRecentProblems);

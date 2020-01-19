import { Router } from "express";
import { getUsersData } from "../controllers/userController";

const router = Router();

/**
 * Route Used to get all the users data under /api/users path POST request
 */
router.route("/users")
    .post(getUsersData);

export default router;
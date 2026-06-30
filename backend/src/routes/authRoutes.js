import express from "express"
import {login} from "../controllers/authController.js"
import { accountSetupPage } from "../controllers/authController.js"
import { accountSetup } from "../controllers/authController.js";

const router = express.Router();

router.post('/login',login);

router.get('/account-setup',accountSetupPage);

router.post('/account-setup',accountSetup);


export default router;
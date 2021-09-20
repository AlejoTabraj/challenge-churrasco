import { logIn } from '../controllers/user.auth';
import { Router } from "express";

const router = Router()

router.post('/login', logIn)

export default router
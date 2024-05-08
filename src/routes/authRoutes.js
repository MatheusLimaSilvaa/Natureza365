import { Router } from 'express';
import auth from '../controllers/authController';

const router = new Router();

router.post('/', auth.store);

export default router;

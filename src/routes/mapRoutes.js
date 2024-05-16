import { Router } from 'express';
import map from '../controllers/mapController';

const router = new Router();

router.get('/:cep', map.index);

export default router;
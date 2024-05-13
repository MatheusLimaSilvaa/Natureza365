import { Router } from 'express';
import local from '../controllers/localController';

import authMiddleware from '../middleware/authMiddleware'

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', local.index); //< Mostra todos usuários
router.get('/:id', local.show); //< Mostra apenas um usuaŕio logado, não um especfico

router.post('/', authMiddleware, local.store);
router.put('/:id', authMiddleware, local.update);
router.delete('/:id', authMiddleware, local.delete);

export default router;

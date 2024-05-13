import { Router } from 'express';
import user from '../controllers/userController';

import authMiddleware from '../middleware/authMiddleware';

const router = new Router();

//Rotas apenas demonstrativas:
router.get('/', user.index); //< Mostra todos usuários
router.get('/:id', user.show); //< Mostra apenas um usuaŕio logado, não um especfico

router.post('/', user.store);
router.put('/',authMiddleware,  user.update);
router.delete('/', authMiddleware,  user.delete);

export default router;

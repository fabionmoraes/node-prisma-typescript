import { Router } from 'express';

import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLast3MessagesController } from './controllers/GetLas3MessagesController';
import { ProfileUserController } from './controllers/ProfileUserService';
import { ensureAuthenticated } from './middleware/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle)

router.get('/messages/last', new GetLast3MessagesController().handle)
router.post('/messages', ensureAuthenticated, new CreateMessageController().handle)

router.get('/profile', ensureAuthenticated, new ProfileUserController().handle)

export { router }
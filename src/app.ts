require('dotenv').config();

import container from './inversify.config';
import { APP_TYPES } from './application/types';
import { IBot } from './application/interfaces';

let bot = container.get<IBot>(APP_TYPES.Bot);

bot.login().then(() => bot.listen());

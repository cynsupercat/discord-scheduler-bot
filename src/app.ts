require('dotenv').config();

import container from './inversify.config';
import { TYPES } from './types';
import { IBot } from './application/interfaces';

let bot = container.get<IBot>(TYPES.Bot);

bot.login().then(() => bot.listen());

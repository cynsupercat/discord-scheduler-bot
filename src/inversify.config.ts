
import "reflect-metadata";
import { Container } from 'inversify';
import { TYPES } from './types';
import { Client } from 'discord.js';
import { Bot } from './application/bot';
import { IBot } from "./application/interfaces";

const container = new Container();

container.bind<IBot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<Client>(TYPES.Client).toConstantValue(new Client());

export default container;
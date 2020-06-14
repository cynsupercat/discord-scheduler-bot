
import "reflect-metadata";
import { Container } from 'inversify';
import { APP_TYPES } from './application/types';
import { Client } from 'discord.js';
import { Bot } from './application/bot';
import { IBot, IGroupRepository, ICommandFactory } from './application/interfaces';
import { IFirestoreClient } from './infrastructure/interfaces';
import FirestoreClient from './infrastructure/firestoreClient';
import { INFRASTRUCTURE_TYPES } from './infrastructure/types';
import GroupRepository from './infrastructure/repositories/groupRepository';
import CommandFactory from './application/commands/commandFactory';

const container = new Container();

container.bind<IBot>(APP_TYPES.Bot).to(Bot).inSingletonScope();
container.bind<ICommandFactory>(APP_TYPES.CommandFactory).to(CommandFactory).inSingletonScope();
container.bind<IGroupRepository>(APP_TYPES.GroupRepository).to(GroupRepository).inTransientScope();

container.bind<IFirestoreClient>(INFRASTRUCTURE_TYPES.Firestore).to(FirestoreClient).inSingletonScope();

container.bind<string>(APP_TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<Client>(APP_TYPES.Client).toConstantValue(new Client());

export default container;
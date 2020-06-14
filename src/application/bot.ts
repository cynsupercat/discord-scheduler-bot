import { Client } from "discord.js";
import { injectable, inject } from "inversify";
import { APP_TYPES } from "./types";
import { IBot, ICommandFactory } from './interfaces';

@injectable()
export class Bot implements IBot {

  private _client: Client;
  private readonly _token: string;
  private readonly _commandFactory: ICommandFactory;

  constructor(
    @inject(APP_TYPES.Client) client: Client,
    @inject(APP_TYPES.Token) token: string,
    @inject(APP_TYPES.CommandFactory) commandFactory: ICommandFactory) {
    this._client = client;
    this._token = token;
    this._commandFactory = commandFactory;
  }

  public login(): Promise<string> {
    return this._client.login(this._token);
  };

  public listen() {
    const prefix = '!';

    this._client.on('message', message => {
      if (!message.content?.startsWith(prefix) || message.author.bot) 
        return;

      const args = message.content.slice(1).split(/ +/);
      const command = args[0];

      const commandHandler = this._commandFactory.create(command);
      const reply = commandHandler.handle(message, args);
      
      message.channel.send(reply);
    })
  }
}

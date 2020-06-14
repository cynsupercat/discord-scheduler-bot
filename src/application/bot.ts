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

      let args = message.content.slice(1).split(/ +/);

      // first occurence of real args -- index 0 is just !toro
      const command = args[1];
      const commandHandler = this._commandFactory.create(command);

      // 1 = command name, 2...n = real args
      const commandArgs = args.slice(2);
      const reply = commandHandler.handle(message, commandArgs);

      message.channel.send(reply);
    })
  }
}

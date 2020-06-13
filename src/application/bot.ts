import { Client } from "discord.js";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { IBot } from "./interfaces";

@injectable()
export class Bot implements IBot {

  private _client: Client;
  private readonly _token: string;

  constructor(
    @inject(TYPES.Client) client: Client,
    @inject(TYPES.Token) token: string) {
    this._client = client;
    this._token = token;
  }

  public login(): Promise<string> {
    return this._client.login(this._token);
  };

  public listen() {
    const prefix = '!';

    this._client.on('message', message => {
      if (!message.content.startsWith(prefix) || message.author.bot) 
        return;

      message.channel.send('Pong.');
    })
  }
}

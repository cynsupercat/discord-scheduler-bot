import { Message } from "discord.js";

export default interface Command {
    readonly command: string;
    handle(message: Message, args?: string[]): Promise<string>;
}
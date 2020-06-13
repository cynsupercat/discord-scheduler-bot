import { Message } from "discord.js";

export default interface Command {
    name: string;
    handle(message: Message, args?: string[]): Promise<void>;
}
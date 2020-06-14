import { injectable, multiInject } from "inversify";
import Command from "./command";
import { APP_TYPES } from '../types';
import { ICommandFactory } from "../interfaces";

// TODO probs better to use inversify factory https://github.com/inversify/InversifyJS/blob/master/wiki/factory_injection.md
@injectable()
export default class CommandFactory implements ICommandFactory {

    private readonly _commands: Command[];

    public constructor(@multiInject(APP_TYPES.Command) commands: Command[]) {
        this._commands = commands;
    }
    
    create(command: string): Command {
        const cmd = this._commands.find(c => c.command === command);
        if (!cmd)
            throw Error(`No command handler registered for ${command}`);

        return cmd;
    }
}
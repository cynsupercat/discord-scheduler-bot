import Group from "../domain/entities/group";
import Command from "./commands/command";

export interface IBot {
    login(): Promise<string>;
    listen(): void;
}

export interface IGroupRepository {
    addGroup(group: Group): void;
}

export interface ICommandFactory {
    create(command: string): Command | null;
}
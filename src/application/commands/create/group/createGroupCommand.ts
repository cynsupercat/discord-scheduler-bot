import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { APP_TYPES } from "../../../types";
import { IGroupRepository } from "../../../interfaces";
import Command from "../../command";

@injectable()
export default class CreateGroupCommand implements Command {
  readonly command: string;

  private readonly _groupRepository: IGroupRepository;

  constructor(
    @inject(APP_TYPES.GroupRepository) groupRepository: IGroupRepository
  ) {
    this._groupRepository = groupRepository;
  }

  async handle(message: Message, args?: string[]): Promise<string> {
    throw new Error("Method not implemented.");
  }
}

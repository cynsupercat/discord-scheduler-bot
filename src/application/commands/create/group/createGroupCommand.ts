import { Message } from "discord.js";
import { inject, injectable } from "inversify";
import { APP_TYPES } from "../../../types";
import { IGroupRepository } from "../../../interfaces";
import Command from "../../command";
import Group from "../../../../domain/entities/group";

@injectable()
export default class CreateGroupCommand implements Command {
  readonly command: string = 'create-group';

  private readonly _groupRepository: IGroupRepository;

  constructor(
    @inject(APP_TYPES.GroupRepository) groupRepository: IGroupRepository
  ) {
    this._groupRepository = groupRepository;
  }

  handle(message: Message, args?: string[]): Promise<string> {
    return new Promise((resolve, reject) => {
        const groupName = args[0];
        if (!groupName)
            reject("Can't create group, please enter a valid group name. Example command: !toro create-group AwesomeGroup")

        this._groupRepository.addGroup(new Group(message.channel.id, args[0]));
        resolve(`${groupName} created. !toro add-member awesomeemail1@mail.com test@gmail.com to add members to the group.`)
    });
  }
}

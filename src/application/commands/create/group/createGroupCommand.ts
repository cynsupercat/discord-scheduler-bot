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

  async handle(message: Message, args?: string[]): Promise<string> {
    const groupName = args[0];
    if (!groupName)
        return "Can't create group, please enter a valid group name. Example command: !toro create-group AwesomeGroup";

    const group = Group.new(message.channel.id, groupName);
    await this._groupRepository.addGroup(group);

    return `${groupName} created. !toro add-member awesomeemail1@mail.com test@gmail.com to add members to the group.`;
  }
}

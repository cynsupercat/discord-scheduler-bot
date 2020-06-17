import { injectable, inject } from "inversify";
import Command from "../../command";
import { IGroupRepository } from "../../../interfaces";
import { APP_TYPES } from "../../../types";
import { Message } from "discord.js";
import Group from "../../../../domain/entities/group";

@injectable()
export default class AddUserCommand implements Command {
  readonly command: string = 'add-user';

  private readonly _groupRepository: IGroupRepository;

  constructor(
    @inject(APP_TYPES.GroupRepository) groupRepository: IGroupRepository
  ) {
    this._groupRepository = groupRepository;
  }

  async handle(message: Message, args?: string[]): Promise<string> {
    const groupName = args[0];
    if (!groupName)
        return "Can't add user to group. please specify a group name. Example command: !toro add-user AwesomeGroup user1@email.com user2@email.com";

    await this._groupRepository.addGroup(Group.new(message.channel.id, args[0]));
    return `${groupName} created. !toro add-member awesomeemail1@mail.com test@gmail.com to add members to the group.`;
  }
}

import Event from './event';
import User from './user';
import { Set as ImmutableSet, List as ImmutableList } from 'immutable';

export default class Group {
    private readonly _users: Set<User> = new Set();
    private readonly _events: Event[] = [];

    readonly channelId: string;
    readonly users = ImmutableSet(this._users);
    readonly events = ImmutableList(this._events);
    readonly name: string;

    constructor(channelId: string, name: string) {
        if (!name)
            throw new Error('Group name must be supplied.');

        if (!channelId)
            throw new Error('Channel ID must be supplied.');

        this.name = name;
        this.channelId = channelId;
    }

    addUsers(...users: User[]) {
        users.forEach(u => this.users.add(u));
    }

    addEvent(event: Event) {
        if (event)
            return;

        this._events.push(event);
    }
}
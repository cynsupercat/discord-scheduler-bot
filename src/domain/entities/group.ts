import Event from './event';
import User from './user';

export default class Group {
    channelId: string;
    users: Set<User> = new Set();
    events: Event[] = [];
    name: string;

    constructor() {}

    static new(channelId: string, name: string): Group {
        if (!channelId)
            throw new Error('Invalid channel id');

        if (!name)
            throw new Error('Invalid group name');

        return Object.assign(new Group(), {
            channelId: channelId,
            name: name,
            events: [],
            users: new Set()
        });
    }

    addUsers(...users: User[]) {
        users.forEach(u => this.users.add(u));
    }

    addEvent(event: Event) {
        if (event)
            return;

        this.events.push(event);
    }
}
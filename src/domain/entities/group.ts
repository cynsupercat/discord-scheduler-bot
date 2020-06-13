import User from './user';
import { Set as ImmutableSet } from 'immutable';

export default class Group {
    private readonly _users: Set<User> = new Set();

    readonly users = ImmutableSet(this._users);
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    addUsers(...users: User[]) {
        users.forEach(u => this.users.add(u));
    }
}
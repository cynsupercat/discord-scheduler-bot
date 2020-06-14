export default class User {
    readonly email: string;

    constructor(email: string) {
        if (!this._validEmail(email))
            throw new Error(`${email} is not a valid email.`);

        this.email = email;
    }

    private _validEmail(email: string): boolean
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}
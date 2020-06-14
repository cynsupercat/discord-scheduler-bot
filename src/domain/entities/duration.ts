import { tryParse } from "./../../utils/numberUtils";

export default class Duration {
    readonly hours: number;
    readonly minutes: number;

    constructor(hours: number, minutes: number) {
        this.minutes = minutes;
        this.hours = hours;
    }

    static fromValue(val: string): Duration {

        const errorMessage = "Invalid duration. Value should be in the format of 1h30m or 1h30.";
        const re = /h|m/;
        const split  = val.split(re, 2).filter(Boolean);
        if (split.length !== 2)
            throw Error(errorMessage);

        const [hoursVal, minuteVal] = split;
        const hours = tryParse(hoursVal);
        const minutes = tryParse(minuteVal);

        if (hours === null || minutes === null)
            throw Error(errorMessage);

        return new this(hours, minutes);
    }
}
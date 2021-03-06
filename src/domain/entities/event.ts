import Duration from "./duration";

export default class Event {
    readonly time: string;
    readonly date: string;
    readonly duration: Duration;
    readonly timezone: string;

    // 2020-08-12 11:00 1h30m 
    constructor(time: string, date: string, duration: string) {
        // default supports aussie timezone because timezones are for masochists
        this.timezone = 'Australia/Sydney';
        this.date = date;
        this.duration = Duration.fromValue(duration);
        this.time = time;
    }
}
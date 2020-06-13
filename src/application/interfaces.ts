export interface IBot {
    login(): Promise<string>;
    listen(): void;
}
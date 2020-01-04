export type Message = {
    id: string;
    text: string;
    sentFrom?: string;
    timeStamp?: Date;
    sentFromUser: boolean;
}
export type message = {
    id: string;
    text: string;
    sentFrom?: string;
    timeStamp?: Date;
    sentFromUser: boolean;
}

export class Transaction{
    sender:string;
    reciever:string;
    ammount:number;
    timestamp:number;

    constructor(sender:string, reciever:string, ammount:number, timestamp:number){
        this.sender = sender;
        this.reciever = reciever;
        this.ammount = ammount;
        this.timestamp = timestamp;
    }
}

export function genID(){
    let id = '0x';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 15; i++) {
       id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}
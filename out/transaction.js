"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Transaction {
    constructor(sender, reciever, ammount, timestamp) {
        this.sender = sender;
        this.reciever = reciever;
        this.ammount = ammount;
        this.timestamp = timestamp;
    }
}
exports.Transaction = Transaction;
function genID() {
    let id = '0x';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 15; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}
exports.genID = genID;

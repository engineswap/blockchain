"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This will be a simple blockchain that I may build out and add stuff to over time
 */
const transaction_1 = require("./transaction");
const sha256 = require('sha256');
let chainLen = 10;
class Block {
    constructor(index, timestamp, previous_hash, message, transactions) {
        this.index = index;
        this.timestamp = timestamp;
        this.previous_hash = previous_hash;
        this.current_hash = sha256(index + timestamp + previous_hash + message);
        this.transactions = transactions;
    }
}
//generate first transaction
let transactionsArray = [];
const genFirstTransaction = () => new transaction_1.Transaction("a", "b", 1, Date.now());
transactionsArray.push(genFirstTransaction());
//generate first block
const genGenesisBlock = () => new Block(0, Date.now(), "0", "Genesis block", transactionsArray);
const genNextBlock = (lastBlock, message) => new Block(lastBlock.index + 1, Date.now(), lastBlock.current_hash, message, transactionsArray);
const createBlockChain = (length) => {
    let chain = [];
    chain.push(genGenesisBlock());
    let lastestBlock = chain[0];
    for (let i = 0; i < length; i++) {
        let newBlock = genNextBlock(lastestBlock, `Block #${i + 1}`);
        chain.push(newBlock);
        lastestBlock = newBlock;
    }
    console.log(chain);
};
createBlockChain(chainLen);

/**
 * This will be a simple blockchain that I may build out and add stuff to over time
 */
import {Transaction, genID} from "./transaction";
const sha256 = require('sha256');

let chainLen = 10;

class Block{
    index:number;
    timestamp:number;
    current_hash:string;
    previous_hash:string;
    transactions:Array<Transaction>;

    constructor(index:number, timestamp:number, previous_hash:string, message:string, transactions:Array<Transaction>){
        this.index = index;
        this.timestamp = timestamp;
        this.previous_hash = previous_hash;
        this.current_hash = sha256(index + timestamp + previous_hash + message);
        this.transactions = transactions;
    }
}
//generate first transaction
let transactionsArray: Array<Transaction> = [];
const genFirstTransaction = () => new Transaction("a", "b", 1, Date.now());
transactionsArray.push(genFirstTransaction())

//generate first block
const genGenesisBlock = () => new Block(0, Date.now(), "0", "Genesis block", transactionsArray);

const genNextBlock = (lastBlock:Block, message:string) => new Block(lastBlock.index+1, Date.now(), lastBlock.current_hash, message, transactionsArray)

const createBlockChain = (length:number) => {
    let chain = [];
    chain.push(genGenesisBlock());

    let lastestBlock = chain[0];

    for(let i = 0; i<length; i++){
        let newBlock = genNextBlock(lastestBlock, `Block #${i+1}`);
        chain.push(newBlock);
        lastestBlock = newBlock;
    }
    console.log(chain)
}

createBlockChain(chainLen);
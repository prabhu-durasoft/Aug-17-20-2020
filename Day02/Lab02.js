class Transaction {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
        this.date = new Date().toLocaleDateString();
    }
}
class Account {
    constructor(theBalance = 10000) {
        if (theBalance < 10000) {
            throw new Error("Insufficient balance: " + theBalance);
        }
        this.balance = theBalance;
        this.withdrawCount = 0;
        this.transactions = [];
    }
    deposit(amount) {
        this.balance += amount;
        this.transactions.push(new Transaction("Deposit", amount));
    }
    withdraw(amount) {
        if (this.balance > amount) {
            this.withdrawCount++;
            this.balance -= amount;
            this.transactions.push(new Transaction("Withdraw", amount));
            if (this.withdrawCount > 3) {
                let fee = amount * 0.005;
                this.balance -= fee;
                this.transactions.push(new Transaction("Fee", fee));
            }
        }
    }
    printStatement() {
        this.transactions.forEach(txn => console.log(txn.type + "(" + txn.amount + ")" + " on " + txn.date));
    }
}
let acc = new Account(20000);
acc.deposit(100);
acc.deposit(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.withdraw(100);
acc.printStatement();
console.log('Balance: ' + acc.balance);
try {
    let acc2 = new Account(1000);    
} catch (error) {
    console.log("Error: " + error.message);
}

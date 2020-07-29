import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface TransactionCTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = {
      income: 0,
      outcome: 0,
      total: 0,
    };
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    this.balance.income = this.transactions.reduce((total, item) => {
      return item.type === 'income' ? total + item.value : total + 0;
    }, 0);

    this.balance.outcome = this.transactions.reduce((total, item) => {
      return item.type === 'outcome' ? total + item.value : total + 0;
    }, 0);

    this.balance.total = this.balance.income - this.balance.outcome;
    return this.balance;
  }

  public create({ title, value, type }: TransactionCTO): Transaction {
    const transation = new Transaction({ title, value, type });
    this.transactions.push(transation);

    return transation;
  }
}

export default TransactionsRepository;

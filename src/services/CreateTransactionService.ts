import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute(data: Request): Transaction {
    // TODO
    const balance = this.transactionsRepository.getBalance();
    if (data.type === 'outcome' && data.value > balance.total) {
      throw Error('insufficient funds');
    }
    const transation = this.transactionsRepository.create(data);

    return transation;
  }
}

export default CreateTransactionService;

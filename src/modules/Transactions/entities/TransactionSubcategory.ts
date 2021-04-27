import Realm from 'realm';
import TransactionCategory from './TransactionCategory';

interface ITransactionSubcategory {
  name: string;
  user: number;
  category: Realm.Results<TransactionCategory> | TransactionCategory;
}

class TransactionSubcategory {
  private readonly _name: string = '';
  private readonly _user: number = -1;
  private readonly _category:
    | Realm.Results<TransactionCategory>
    | TransactionCategory;

  private static _schema: Realm.ObjectSchema = {
    name: 'TransactionSubcategory',
    properties: {
      name: {type: 'string', indexed: true},
      user: 'string',
      category: 'TransactionCategory',
      created_at: {type: 'date', default: new Date(), mapTo: 'createdAt'},
    },
  };

  constructor({name, user, category}: ITransactionSubcategory) {
    this._name = name;
    this._user = user;
    this._category = category;
  }

  get name(): string {
    return this._name;
  }

  get user(): number {
    return this._user;
  }

  get category(): Realm.Results<TransactionCategory> | TransactionCategory {
    return this._category;
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }
}

export default TransactionSubcategory;

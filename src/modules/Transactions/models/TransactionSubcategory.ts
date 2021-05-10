import Realm from 'realm';
import TransactionCategory from './TransactionCategory';
import {v4 as uuidv4} from 'uuid';
import Reactotron from 'reactotron-react-native';

interface ITransactionSubcategory {
  _id?: string;
  name: string;
  category?: Realm.Results<TransactionCategory> | TransactionCategory;
}

class TransactionSubcategory {
  _id?: string;
  name: string = '';
  category?: Realm.Results<TransactionCategory> | TransactionCategory | null;

  private static _collectionName = 'TransactionSubcategory';
  private static _schema: Realm.ObjectSchema = {
    name: 'TransactionSubcategory',
    primaryKey: '_id',
    properties: {
      _id: {type: 'string'},
      name: {type: 'string', indexed: true},
      category: {type: 'linkingObjects', objectType: 'TransactionCategory', property: 'subcategories'},
      created_at: {type: 'date', default: new Date(), mapTo: 'createdAt', optional: true},
    },
  };

  constructor({_id, name, category}: ITransactionSubcategory) {
    if (!_id) {
      Reactotron.log!('V4', uuidv4());
      this._id = uuidv4();
    } else {
      this._id = _id;
    }
    this.name = name;
    this.category = category;
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }

  static get collectionName(): string {
    return this._collectionName;
  }
}

export default TransactionSubcategory;

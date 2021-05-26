import Realm from 'realm';
import TransactionSubcategory from './TransactionSubcategory';
import TransactionCategoryIcon from './TransactionCategoryIcon';
import {v4 as uuidv4} from 'uuid';

interface ITransactionCategory {
  _id?: string;
  name: string;
  color: string;
  createdAt: Date;
  subcategories: Realm.List<TransactionSubcategory> | TransactionSubcategory[] | [];
  icon: TransactionCategoryIcon;
}

class TransactionCategory {
  _id?: string;
  name: string = '';
  color!: string;
  icon!: TransactionCategoryIcon;
  subcategories?: Realm.List<TransactionSubcategory> | TransactionSubcategory[] | [];
  createdAt: Date;

  private static _collectionName = 'TransactionCategory';

  constructor({name, _id, color, icon, subcategories, createdAt}: ITransactionCategory) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.subcategories = subcategories;
    if (!_id) {
      this._id = uuidv4();
    } else {
      this._id = _id;
    }
    if (!createdAt || isNaN(createdAt.getTime())) {
      this.createdAt = new Date();
    } else {
      this.createdAt = new Date(createdAt);
    }
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }

  static get collectionName(): string {
    return this._collectionName;
  }

  private static _schema: Realm.ObjectSchema = {
    name: TransactionCategory._collectionName,
    primaryKey: '_id',
    properties: {
      _id: {type: 'string', indexed: true},
      name: {type: 'string', indexed: true},
      color: 'string',
      icon: 'Icon',
      subcategories: 'TransactionSubcategory[]',
      created_at: {type: 'date', default: new Date(), mapTo: 'createdAt', optional: true},
    },
  };
}

export default TransactionCategory;

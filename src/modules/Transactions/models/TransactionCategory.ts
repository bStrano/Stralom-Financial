import Realm from 'realm';
import TransactionSubcategory from './TransactionSubcategory';
import TransactionCategoryIcon from './TransactionCategoryIcon';

interface ITransactionCategory {
  id?: string;
  name: string;
  color: string;
  createdAt: Date;
  subcategories: Realm.List<TransactionSubcategory> | TransactionSubcategory[];
  icon: TransactionCategoryIcon;
}

class TransactionCategory {
  id?: string;
  name: string = '';
  color!: string;
  icon!: TransactionCategoryIcon;
  subcategories: Realm.List<TransactionSubcategory> | TransactionSubcategory[];
  createdAt: Date;

  private static _schema: Realm.ObjectSchema = {
    name: 'TransactionCategory',
    primaryKey: 'id',
    properties: {
      id: {type: 'string', indexed: true},
      name: {type: 'string', indexed: true},
      color: 'string',
      icon: 'Icon',
      subcategories: 'TransactionSubcategory[]',
      created_at: {type: 'date', default: new Date(), mapTo: 'createdAt', optional: true},
    },
  };

  constructor({name, id, color, icon, subcategories, createdAt}: ITransactionCategory) {
    this.name = name;
    this.color = color;
    this.icon = icon;
    this.subcategories = subcategories;
    this.id = id;
    if (!createdAt) {
      this.createdAt = new Date();
    } else {
      this.createdAt = new Date(createdAt);
    }
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }
}

export default TransactionCategory;

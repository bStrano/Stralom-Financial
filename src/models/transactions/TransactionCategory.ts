import Realm from 'realm';
import TransactionSubcategory from './TransactionSubcategory';
import {IIcon} from 'react-native-stralom-components';

interface ITransactionCategory {
  name: string;
  color: string;
  user: number;
  subcategories: Realm.List<TransactionSubcategory> | TransactionSubcategory[];
  icon: IIcon;
}

class TransactionCategory {
  private readonly _name: string = '';
  private readonly _user: number = -1;
  private readonly _color!: string;
  private readonly _icon!: IIcon;
  private readonly _subcategories:
    | Realm.List<TransactionSubcategory>
    | TransactionSubcategory[];

  private static _schema: Realm.ObjectSchema = {
    name: 'TransactionCategory',
    properties: {
      name: {type: 'string', indexed: true},
      color: 'string',
      icon: 'IconSchema',
      user: 'string',
      subcategories: 'TransactionSubcategory[]',
      created_at: {type: 'date', default: new Date(), mapTo: 'createdAt'},
    },
  };

  constructor({name, user, color, icon, subcategories}: ITransactionCategory) {
    this._name = name;
    this._user = user;
    this._color = color;
    this._icon = icon;
    this._subcategories = subcategories;
  }

  get name(): string {
    return this._name;
  }

  get user(): number {
    return this._user;
  }

  get color(): string {
    return this._color;
  }

  get subcategories():
    | Realm.List<TransactionSubcategory>
    | TransactionSubcategory[] {
    return this._subcategories;
  }

  get icon(): IIcon {
    return this._icon;
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }
}

export default TransactionCategory;

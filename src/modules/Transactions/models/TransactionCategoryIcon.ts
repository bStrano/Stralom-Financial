import Realm from 'realm';
import icons from '../../../shared/constants/icons';

interface ITransactionCategoryIcon {
  id: number;
  name?: string;
  class?: string;
}

class TransactionCategoryIcon {
  id!: number;
  name: string = '';
  class: string = '';

  private static _schema: Realm.ObjectSchema = {
    name: 'Icon',
    embedded: true,
    properties: {
      id: 'int',
      name: 'string',
      class: 'string',
    },
  };

  constructor(props: ITransactionCategoryIcon) {
    let icon;
    if (props.id && !props.name && !props.class) {
      icon = icons.find((item) => {
        return item.id === props.id;
      });
    } else {
      icon = {props};
    }

    if (!icon?.id || !icon?.name || !icon?.class) {
      throw new Error('Invalid Icon');
    }
    this.id = icon.id;
    this.name = icon.name;
    this.class = icon.class;
  }

  static get schema(): Realm.ObjectSchema {
    return this._schema;
  }
}

export default TransactionCategoryIcon;

import TransactionCategory from '../../models/TransactionCategory';
import getRealm from '../../../../shared/infra/realm/realm';
import Reactotron from 'reactotron-react-native';
import Realm, {Results} from 'realm';

export default class TransactionCategoryRepository {
  static async save(transactionCategory: TransactionCategory) {
    Reactotron.log!('Save', transactionCategory);
    let realm = await getRealm();
    realm.write(() => {
      realm.create('TransactionCategory', transactionCategory);
    });
  }

  static async saveMultiple(transactionCategories: TransactionCategory[], update = Realm.UpdateMode.Never) {
    let realm = await getRealm();
    realm.write(() => {
      transactionCategories.forEach((transactionCategory) => {
        // @ts-ignore
        realm.create('TransactionCategory', transactionCategory, update);
      });
    });
  }

  static async findAll(): Promise<Results<TransactionCategory>> {
    let realm = await getRealm();
    return realm.objects('TransactionCategory');
  }
}

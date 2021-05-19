import TransactionCategory from '../../models/TransactionCategory';
import getRealm from '../../../../shared/infra/realm/realm';
import Reactotron from 'reactotron-react-native';
import Realm, {Results} from 'realm';
import TransactionSubcategory from '../../models/TransactionSubcategory';

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
        const transactionCategoryNew = <Realm.Object<TransactionCategory>>realm.create(TransactionCategory.collectionName, transactionCategory, update);
        transactionCategoryNew.subcategories = transactionCategoryNew.subcategories!.map((transactionSubcategory: TransactionSubcategory) => {
          return new TransactionSubcategory({
            _id: transactionSubcategory._id,
            name: transactionSubcategory.name,
            category: transactionCategoryNew.toJSON(),
          });
        });
      });
    });
  }

  static async findAll(): Promise<Results<TransactionCategory>> {
    let realm = await getRealm();
    return realm.objects('TransactionCategory');
  }
}

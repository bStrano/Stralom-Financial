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

  static async update(transactionCategory: TransactionCategory) {
    Reactotron.log!('Update', transactionCategory);
    let realm = await getRealm();
    realm.write(() => {
      let category = <TransactionCategory>realm.objectForPrimaryKey('TransactionCategory', transactionCategory._id!.toString());
      if (!category) {
        throw new Error('Not found');
      }
      category.icon = transactionCategory.icon;
      category.color = transactionCategory.color;
      category.name = transactionCategory.name;
      let newSubcategories: TransactionSubcategory[] = [];
      transactionCategory.subcategories?.forEach((subcategory) => {
        let subcategoryRealm = category.subcategories?.find((item) => item._id === subcategory._id);
        if (!subcategoryRealm) {
          newSubcategories.push(subcategory);
        } else {
          subcategoryRealm.name = subcategory.name;
        }
      });
      transactionCategory.subcategories?.push(['test']);
    });
  }

  static async saveMultiple(transactionCategories: TransactionCategory[], update = Realm.UpdateMode.Never) {
    let realm = await getRealm();
    realm.write(() => {
      transactionCategories.forEach((transactionCategory) => {
        // @ts-ignore
        const transactionCategoryNew = <Realm.Object<TransactionCategory>>realm.create(TransactionCategory.collectionName, transactionCategory, update);
        console.log(transactionCategoryNew);
        // transactionCategoryNew.subcategories = transactionCategoryNew.subcategories!.map((transactionSubcategory: TransactionSubcategory) => {
        //   return new TransactionSubcategory({
        //     _id: transactionSubcategory._id,
        //     name: transactionSubcategory.name,
        //     category: transactionCategoryNew.toJSON(),
        //   });
        // });
      });
    });
  }

  static async findAll(): Promise<Results<TransactionCategory>> {
    let realm = await getRealm();
    return realm.objects('TransactionCategory');
  }

  static async delete(transactionCategoryId: string): Promise<void> {
    let realm = await getRealm();
    realm.write(() => {
      let category = realm.objectForPrimaryKey('TransactionCategory', transactionCategoryId);
      const transactionSubcategories = realm.objects('TransactionSubcategory').filtered(`category._id == "${transactionCategoryId}"`);
      realm.delete(category);
      realm.delete(transactionSubcategories);
    });
  }
}

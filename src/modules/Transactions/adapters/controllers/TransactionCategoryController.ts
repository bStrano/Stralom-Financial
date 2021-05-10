import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryAPI from '../apis/TransactionCategoryAPI';
import TransactionCategoryRepository from '../repositories/TransactionCategoryRepository';
import Realm from 'realm';

export default class TransactionCategoryController {
  static async save(transactionCategory: TransactionCategory) {
    await TransactionCategoryAPI.save(transactionCategory);
    return await TransactionCategoryRepository.save(transactionCategory);
  }

  static async findAll() {
    return await TransactionCategoryRepository.findAll();
  }

  static async synchronize() {
    try {
      let data = await TransactionCategoryAPI.findAll();
      await TransactionCategoryRepository.saveMultiple(data, Realm.UpdateMode.Modified);
      return await TransactionCategoryRepository.findAll();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}

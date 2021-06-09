import TransactionCategory from '../models/TransactionCategory';
import TransactionCategoryAPI from '../adapters/apis/TransactionCategoryAPI';
import TransactionCategoryRepository from '../adapters/repositories/TransactionCategoryRepository';
import Realm from 'realm';

export default class TransactionCategoryService {
  async save(transactionCategory: TransactionCategory) {
    await TransactionCategoryAPI.save(transactionCategory);
    return await TransactionCategoryRepository.save(transactionCategory);
  }

  async update(transactionCategory: TransactionCategory) {
    await TransactionCategoryAPI.update(transactionCategory);
    return await TransactionCategoryRepository.update(transactionCategory);
  }

  async findAll() {
    return await TransactionCategoryRepository.findAll();
  }

  async synchronize() {
    try {
      let data = await TransactionCategoryAPI.findAll();
      await TransactionCategoryRepository.saveMultiple(data, Realm.UpdateMode.Modified);
      return await TransactionCategoryRepository.findAll();
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async delete(categoryId: string) {
    await TransactionCategoryAPI.delete(categoryId);
    await TransactionCategoryRepository.delete(categoryId);
  }
}

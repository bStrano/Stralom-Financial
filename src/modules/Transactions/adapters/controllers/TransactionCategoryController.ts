import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryService from '../../useCases/TransactionCategoryService';

export default class TransactionCategoryController {
  private readonly categoryService: TransactionCategoryService;

  constructor() {
    this.categoryService = new TransactionCategoryService();
  }

  async save(transactionCategory: TransactionCategory) {
    await this.categoryService.save(transactionCategory);
  }

  async update(transactionCategory: TransactionCategory) {
    await this.categoryService.update(transactionCategory);
  }

  async findAll() {
    return this.categoryService.findAll();
  }

  async synchronize() {
    return this.categoryService.synchronize();
  }

  async delete(transactionCategoryId: string) {
    return this.categoryService.delete(transactionCategoryId);
  }
}

import axiosCore from '../../../../shared/infra/axios/axiosCore';
import ENDPOINTS from '../../../../shared/constants/Endpoints';
import Reactotron from 'reactotron-react-native';

class TransactionCategoryAPI {
  static readonly keys = {
    findAll: 'TransactionCategory_findAll',
    save: 'TransactionCategory_save',
    update: 'TransactionCategory_update',
    delete: 'TransactionCategory_delete',
  };

  static async findAll(): Promise<ITransactionCategory[]> {
    const {data} = await axiosCore.get(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY, {params: {subcategories: true}});
    return data;
  }

  static async save(transactionCategory: ITransactionCategory) {
    const {data} = await axiosCore.post(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY, {...transactionCategory, icon: transactionCategory.icon.id});
    Reactotron.log!(data);
    return transactionCategory;
  }

  static async update(transactionCategory: ITransactionCategory) {
    const {data} = await axiosCore.patch(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY + '/' + transactionCategory.id, {...transactionCategory, icon: transactionCategory.icon.id});
    console.log('Data ok', data);
    return transactionCategory;
  }

  static async delete(transactionCategoryId: string) {
    const {data} = await axiosCore.delete(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY + '/' + transactionCategoryId);
    return data;
  }
}

export default TransactionCategoryAPI;

import axiosCore from '../../../../shared/infra/axios/axiosCore';
import ENDPOINTS from '../../../../shared/constants/Endpoints';
import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryIcon from '../../models/TransactionCategoryIcon';
import Reactotron from 'reactotron-react-native';

class TransactionCategoryAPI {
  static async findAll() {
    const {data} = await axiosCore.get(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY);
    return data.map(({name, color, icon, id, createdAt}: {name: string; color: string; icon: number; id: string; createdAt: Date}) => {
      return new TransactionCategory({name, color, icon: new TransactionCategoryIcon({id: icon}), subcategories: [], id, createdAt});
    });
  }

  static async save(transactionCategory: TransactionCategory) {
    Reactotron.log!({...transactionCategory}, transactionCategory.icon.id);
    const {data} = await axiosCore.post(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY, {...transactionCategory, icon: transactionCategory.icon.id});
    Reactotron.log!(data);
    transactionCategory.id = data?.id;
    return transactionCategory;
  }
}

export default TransactionCategoryAPI;

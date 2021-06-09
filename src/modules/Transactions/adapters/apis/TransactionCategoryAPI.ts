import axiosCore from '../../../../shared/infra/axios/axiosCore';
import ENDPOINTS from '../../../../shared/constants/Endpoints';
import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryIcon from '../../models/TransactionCategoryIcon';
import Reactotron from 'reactotron-react-native';
import TransactionSubcategory from '../../models/TransactionSubcategory';
import _ from 'lodash';

interface IFindAllReturn {
  name: string;
  color: string;
  icon: number;
  _id: string;
  createdAt: string;
  subcategories: [
    {
      _id: string;
      name: string;
      category: string;
    },
  ];
}

class TransactionCategoryAPI {
  static async findAll() {
    const {data} = <{data: IFindAllReturn[]}> await axiosCore.get(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY, {params: {subcategories: true}});

    return data.map(({name, color, icon, _id, createdAt, subcategories}) => {
      let transactionCategory = new TransactionCategory({name, color, icon: new TransactionCategoryIcon({id: icon}), subcategories: [], _id, createdAt: new Date(createdAt)});
      transactionCategory.subcategories = subcategories.map((subcategory) => {
        return new TransactionSubcategory({
          _id: subcategory._id,
          name: subcategory.name,
          category: _.cloneDeep(transactionCategory),
        });
      });
      return transactionCategory;
    });
  }

  static async save(transactionCategory: TransactionCategory) {
    const {data} = await axiosCore.post(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY, {...transactionCategory, icon: transactionCategory.icon.id});
    Reactotron.log!(data);
    return transactionCategory;
  }

  static async update(transactionCategory: TransactionCategory) {
    const {data} = await axiosCore.patch(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY + '/' + transactionCategory._id, {...transactionCategory, icon: transactionCategory.icon.id});
    Reactotron.log!(data);
    return transactionCategory;
  }

  static async delete(transactionCategoryId: string) {
    const {data} = await axiosCore.delete(ENDPOINTS.ROUTES.TRANSACTION_CATEGORY + '/' + transactionCategoryId, {params: {cascade: true}});
    return data;
  }
}

export default TransactionCategoryAPI;

import Realm from 'realm';
import TransactionCategory from '../../../modules/Transactions/models/TransactionCategory';
import TransactionCategoryIcon from '../../../modules/Transactions/models/TransactionCategoryIcon';
import TransactionSubcategory from '../../../modules/Transactions/models/TransactionSubcategory';

export default function getRealm() {
  return Realm.open({
    schema: [TransactionCategoryIcon.schema, TransactionCategory.schema, TransactionSubcategory.schema],
  });
}

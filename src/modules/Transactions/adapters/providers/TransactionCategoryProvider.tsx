import React, {createContext} from 'react';
import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryController from '../controllers/TransactionCategoryController';
import {Results} from 'realm';
import {QueryObserverResult, useQuery} from 'react-query';

interface ITransactionCategoryProviderProps {
  children: JSX.Element;
}

interface ITransactionCategoryContext {
  save: (transactionCategory: TransactionCategory) => Promise<void>;
  synchronize: () => Promise<Results<Object>>;
  categories: QueryObserverResult<Results<TransactionCategory>, TransactionCategory>;
}

export const TransactionCategoryContext = createContext<ITransactionCategoryContext | null>(null);
function TransactionCategoryProvider(props: ITransactionCategoryProviderProps) {
  const categories = useQuery('categories', () => synchronize());
  async function save(transactionCategory: TransactionCategory) {
    try {
      return await TransactionCategoryController.save(transactionCategory);
    } catch (e) {
      console.error(e);
    }
  }

  async function synchronize() {
    return await TransactionCategoryController.synchronize();
  }

  // useEffect(() => {
  //   findAll().then((data) => {
  //     setCategories(data);
  //     console.log(categories);
  //   });
  // }, []);

  return <TransactionCategoryContext.Provider value={{save, categories, synchronize}}>{props.children}</TransactionCategoryContext.Provider>;
}

export default TransactionCategoryProvider;

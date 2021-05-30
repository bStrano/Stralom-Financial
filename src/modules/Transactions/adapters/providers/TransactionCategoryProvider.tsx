import React, {createContext, useState} from 'react';
import TransactionCategory from '../../models/TransactionCategory';
import TransactionCategoryController from '../controllers/TransactionCategoryController';
import {Results} from 'realm';
import {QueryObserverResult, useQuery} from 'react-query';

interface ITransactionCategoryProviderProps {
  children: JSX.Element;
}

interface ITransactionCategoryContext {
  save: (transactionCategory: TransactionCategory) => Promise<void>;
  remove: (transactionCategoryId: string) => Promise<void>;
  synchronize: () => Promise<Results<Object>>;
  categories: QueryObserverResult<Results<TransactionCategory>, TransactionCategory>;
}

const transactionCategoryController = new TransactionCategoryController();

export const TransactionCategoryContext = createContext<ITransactionCategoryContext | null>(null);
function TransactionCategoryProvider(props: ITransactionCategoryProviderProps) {
  const categories = useQuery('categories', () => synchronize());
  const [, setForceRefresh] = useState('');
  async function save(transactionCategory: TransactionCategory) {
    try {
      return await transactionCategoryController.save(transactionCategory);
    } catch (e) {
      console.error(e);
    }
  }

  async function synchronize() {
    return await transactionCategoryController.synchronize();
  }

  async function remove(transactionCategoryId: string) {
    await transactionCategoryController.delete(transactionCategoryId);
    // TODO: Analisar futuramente por que o Realm não está atualizando o FlatList sozinho e está sendo necessário forçar o refresh
    setForceRefresh(Math.random().toString());
  }

  // useEffect(() => {
  //   findAll().then((data) => {
  //     setCategories(data);
  //     console.log(categories);
  //   });
  // }, []);

  return <TransactionCategoryContext.Provider value={{save, remove, categories, synchronize}}>{props.children}</TransactionCategoryContext.Provider>;
}

export default TransactionCategoryProvider;

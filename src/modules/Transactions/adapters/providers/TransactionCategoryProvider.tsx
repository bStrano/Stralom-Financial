import React, {createContext, useCallback} from 'react';
import {QueryObserverResult, useMutation, useQuery, useQueryClient} from 'react-query';
import TransactionCategoryAPI from '../apis/TransactionCategoryAPI';
import useToast from '../../../../shared/hooks/useToast';

interface ITransactionCategoryProviderProps {
  children: JSX.Element;
}

interface ITransactionCategoryContext {
  save: (transactionCategory: ITransactionCategory, onSuccess: () => void) => Promise<void>;
  update: (transactionCategory: ITransactionCategory, onSuccess: () => void) => Promise<void>;
  remove: (transactionCategoryId: string, onSuccess: () => void) => Promise<void>;
  categoriesQuery: QueryObserverResult<ITransactionCategory[], unknown>;
}

export const TransactionCategoryContext = createContext<ITransactionCategoryContext | null>(null);
function TransactionCategoryProvider(props: ITransactionCategoryProviderProps) {
  const queryClient = useQueryClient();
  const Toast = useToast();
  const {data, isLoading, isError} = useQuery([TransactionCategoryAPI.keys.findAll], TransactionCategoryAPI.findAll);
  const categoriesUpdateMutation = useMutation(TransactionCategoryAPI.keys.update, TransactionCategoryAPI.update);
  const categoriesDeleteMutation = useMutation(TransactionCategoryAPI.keys.delete, TransactionCategoryAPI.delete);
  const categoriesSaveMutation = useMutation(TransactionCategoryAPI.keys.save, TransactionCategoryAPI.save);

  const onMutate = useCallback(
    (onSuccess) => {
      return {
        onError: (error: any) => {
          Toast.showError();
          console.error(error);
        },
        onSuccess: () => {
          queryClient.invalidateQueries(TransactionCategoryAPI.keys.findAll);
          onSuccess();
        },
      };
    },
    [Toast, queryClient],
  );

  async function save(transactionCategory: ITransactionCategory, onSuccess: () => void) {
    await categoriesSaveMutation.mutate(transactionCategory, onMutate(onSuccess));
  }

  async function update(transactionCategory: ITransactionCategory, onSuccess: () => void) {
    await categoriesUpdateMutation.mutate(transactionCategory, onMutate(onSuccess));
  }

  async function remove(transactionCategoryId: string, onSuccess: () => void) {
    await categoriesDeleteMutation.mutate(transactionCategoryId, onMutate(onSuccess));
  }

  return <TransactionCategoryContext.Provider value={{save, remove, update, categoriesQuery}}>{props.children}</TransactionCategoryContext.Provider>;
}

export default TransactionCategoryProvider;

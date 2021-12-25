interface ITransactionCategory {
  id: string;
  name: string;
  color: string;
  createdAt: Date;
  subcategories: ITransactionSubcategory[];
  icon: ITransactionCategoryIcon;
}

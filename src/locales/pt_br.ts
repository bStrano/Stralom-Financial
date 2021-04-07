import ILocale from './ILocale';

const commons = {
  common: {
    create: 'Criar',
    save: 'Salvar',
    cancel: 'Cancelar',
  },
  validation: {
    generic: 'Ops! Falha ao prosseguir, tente novamente mais tarde.',
  },
  glossary: {
    home: 'Home',
    transaction: 'Transação',
    category: 'Categoria',
    statistics: 'Estatistica',
    options: 'Opções',
  },
};

const pt_br: ILocale = {
  category: {
    registration: {
      title: `${commons.common.create} ${commons.glossary.category}`,
    },
  },
  commons,
};

export default pt_br;

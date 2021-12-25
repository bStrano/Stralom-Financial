import ILocale from './ILocale';
import _ from 'lodash';

const commons = {
  common: {
    create: 'Criar',
    save: 'Salvar',
    update: 'Atualizar',
    cancel: 'Cancelar',
    delete: 'Remover',
  },
  validation: {
    generic: 'Ops! Falha ao prosseguir, tente novamente mais tarde.',
  },
  errors: {
    requestTitle: 'Ops, ocorreu algo de errado',
    requestSubtitle: 'Tente novamente em alguns instantes.',
  },
  glossary: {
    home: 'Home',
    transaction: 'Transação',
    category: 'Categoria',
    subcategory: 'Subcategoria',
    statistics: 'Estatistica',
    options: 'Opções',
    description: 'Descrição',
    color: 'Cor',
    icon: 'Icone',
  },
};

const pt_br: ILocale = {
  category: {
    registration: {
      title: _.capitalize(`${commons.common.create} nova ${commons.glossary.category}`),
    },
    update: {
      title: _.capitalize(`${commons.common.update} ${commons.glossary.category}`),
    },
    delete: {
      title: `${commons.common.delete} ${commons.glossary.category.toLowerCase()}`,
      confirmation: 'A categoria será removida permanentemente, tem certeza que deseja prosseguir?',
    },
  },
  commons,
};

export default pt_br;

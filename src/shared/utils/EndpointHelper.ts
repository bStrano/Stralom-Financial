import ENDPOINTS from '../constants/Endpoints';

enum ROUTES {
  'TRANSACTION' = 'TRANSACTION',
  'TRANSACTION_CATEGORY' = 'TRANSACTION_CATEGORY',
  'TRANSACTION_SUBCATEGORY' = 'TRANSACTION_SUBCATEGORY',
}

export default class EndpointHelper {
  static ROUTES = ROUTES;

  static getRoute(route: ROUTES) {
    return ENDPOINTS.API + ENDPOINTS.ROUTES[route];
  }
}

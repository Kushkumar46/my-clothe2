

import CATEGORIES_ACTION_TYPES from './category.type';

const createAction = (type, payload) => ({ type, payload });

export const setCategoriesMap = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoriesMap);
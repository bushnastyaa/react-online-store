// @ts-nocheck
import { message } from 'antd';

export const successAddInBasket = () => {
  message.success('Товар успешно добавлен в корзину', [1]);
};
export const alreadyInBasket = () => {
  message.error('Товар уже добавлен', [1]);
};
export const successAddGoods = () => {
  message.success('Товар добавлен!', [1]);
};
export const successConfirm = () => {
  message.success('Заказ успешно оформлен!', [1]);
};
export const successRemove = () => {
  message.success('Товар успешно удален!', [1]);
};
export const successAdd = () => {
  message.success('+1', [1]);
};

export const providesList = (resultsWithIds, tagType) => {
  return resultsWithIds
    ? [
        { type: tagType, id: 'LIST' },
        ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
      ]
    : [{ type: tagType, id: 'LIST' }];
};

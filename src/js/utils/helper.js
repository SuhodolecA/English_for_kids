/* eslint-disable import/no-cycle */
import { SET_VAR, GET_VAR } from './variables';
import createStartPageCardSet from './createStartPgageCardsList';
import data from '../../assets/data/data.json';

// create element
const createElement = (name) => {
  const element = document.createElement(name);
  return element;
};

const capitalizeFirstWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const setGlobalValues = () => {
  SET_VAR('categoryName', document.querySelector('.category-name'));
  SET_VAR('cardsList', document.querySelector('.cards-list'));
};

const createCardsSet = () => {
  const category = GET_VAR('categoryName').textContent;
  console.log('category', category);
  if (category === 'Home') {
    // generate start page
    createStartPageCardSet(data);
  } else {
    // generate current category page
  }
};

export {
  createElement, setGlobalValues, createCardsSet, capitalizeFirstWord,
};

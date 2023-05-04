/* eslint-disable import/no-cycle */
import { SET_VAR, GET_VAR } from './variables';
import createStartPageCardSet from './createStartPageCardsList';
import data from '../../assets/data/data.json';

// create element
const createElement = (name) => {
  const element = document.createElement(name);
  return element;
};

const clearCardsListContainer = () => {
  const container = GET_VAR('cardsList');
  container.innerHTML = '';
};

const capitalizeFirstWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const setGlobalValues = () => {
  SET_VAR('categoryName', document.querySelector('.category-name'));
  SET_VAR('cardsList', document.querySelector('.cards-list'));
  SET_VAR('hamburgerBtn', document.querySelector('.header-hamburger'));
  SET_VAR('headerNav', document.querySelector('.header-nav'));
  SET_VAR('headerMenu', document.querySelector('.header-menu'));
  SET_VAR('overlay', document.querySelector('.overlay'));
  SET_VAR('body', document.querySelector('body'));
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
  clearCardsListContainer,
};

/* eslint-disable import/no-cycle */
import { createElement, capitalizeFirstWord } from '../utils/helper';

const createNavMenuItem = (linkName) => {
  // create li
  const li = createElement('li');
  li.classList.add('header-menu__item');

  // create menu link
  const link = createElement('a');
  link.classList.add('header-menu__item-link');
  link.href = `#${linkName}`;
  link.dataset.section = capitalizeFirstWord(linkName);
  link.textContent = capitalizeFirstWord(linkName);
  link.tabIndex = -1;

  li.append(link);

  return li;
};

export default createNavMenuItem;

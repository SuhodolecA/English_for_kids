import '../scss/styles.scss';
import data from '../assets/data/data.json';
import { createOverlay } from './components/overlay';
import createHeader from './components/header';
import { createMain } from './components/main';
import createFooter from './components/footer';
import { createModalWindow } from './components/modalWindow';
import setEventListeners from './utils/events';
import { setGlobalValues, createStartPageCardSet } from './utils/helper';
import { GET_VAR } from './utils/variables';

// import createCardItem from './components/cardItem';

const appWrapper = document.querySelector('.wrapper');

appWrapper.append(createOverlay());
appWrapper.append(createHeader());
appWrapper.append(createModalWindow());
appWrapper.append(createMain());
appWrapper.append(createFooter());
document.addEventListener('DOMContentLoaded', () => {
  setGlobalValues();
  createStartPageCardSet(data);
  setEventListeners();
  console.log(GET_VAR('headerMenu'));
  console.log(GET_VAR('cardsList'));
});

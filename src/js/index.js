import '../scss/styles.scss';
import data from '../assets/data/data.json';
import { createOverlay } from './components/overlay';
import createHeader from './components/header';
import { createMain } from './components/main';
import createFooter from './components/footer';
import { createModalWindow } from './components/modalWindow';
// import createStatisticsPage from './components/statisticsPage';
import setEventListeners from './utils/events';
import { setGlobalValues, createStartPageCardSet } from './utils/helper';
// import { GET_VAR } from './utils/variables';

// import createCardItem from './components/cardItem';

// localStorage.clear();
const appWrapper = document.querySelector('.wrapper');

appWrapper.append(createOverlay());
appWrapper.append(createHeader());
appWrapper.append(createModalWindow());
appWrapper.append(createMain());
// appWrapper.append(createStatisticsPage());
appWrapper.append(createFooter());
document.addEventListener('DOMContentLoaded', () => {
  setGlobalValues();
  createStartPageCardSet(data);
  // appWrapper.append(createStatisticsPage());
  // appWrapper.append(createMain());
  setEventListeners();
});

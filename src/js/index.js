import '../scss/styles.scss';
import { createOverlay } from './components/overlay';
import createHeader from './components/header';
import { createMain } from './components/main';
import createFooter from './components/footer';
import { createModalWindow } from './components/modalWindow';
import { createStatisticsPage } from './components/statisticsPage';
import setEventListeners from './utils/events';
import { setGlobalValues, createStartPageCardSet } from './utils/helper';
import { GET_VAR, SET_VAR } from './utils/variables';

const appWrapper = document.querySelector('.wrapper');

fetch('../assets/data/data.json')
  .then((response) => response.json())
  .then((response) => SET_VAR('data', response))
  .then(() => {
    appWrapper.append(createOverlay());
    appWrapper.append(createHeader());
    appWrapper.append(createModalWindow());
    appWrapper.append(createMain());
    appWrapper.append(createFooter());
  })
  .then(() => {
    setGlobalValues();
    createStartPageCardSet(GET_VAR('data'));
    const mainSection = GET_VAR('mainSection');
    mainSection.append(createStatisticsPage());
    setEventListeners();
  });

import '../scss/styles.scss';
import createHeader from './components/header';
import createMain from './components/main';
import createFooter from './components/footer';
import './utils/events';
import { setGlobalValues, createCardsSet } from './utils/helper';
import { GET_VAR } from './utils/variables';
// import createCardItem from './components/cardItem';

const appWrapper = document.querySelector('.wrapper');

appWrapper.append(createHeader());
appWrapper.append(createMain());
appWrapper.append(createFooter());
document.addEventListener('DOMContentLoaded', () => {
  setGlobalValues();
  console.log(GET_VAR('categoryName'));
  console.log(GET_VAR('cardsList'));
  // console.log(createCardItem());
  createCardsSet();
});

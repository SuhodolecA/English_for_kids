/* eslint-disable import/no-cycle */
import { GET_VAR } from './variables';
import createCardItem from '../components/cardItem';
import { clearCardsListContainer } from './helper';

const createStartPageCardSet = (array) => {
  const cardsList = GET_VAR('cardsList');
  cardsList.classList.add('start-page');
  cardsList.dataset.category = 'main-menu';
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.section !== 'home') {
      const imgPath = element.startImage;
      const imgAlt = element.sectionWords[0].alt;
      const cardTitle = element.sectionTitle;
      const cardItem = createCardItem(imgPath, imgAlt, cardTitle);
      cardsList.append(cardItem);
    }
  });
};

export default createStartPageCardSet;

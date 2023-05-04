/* eslint-disable import/no-cycle */
import { GET_VAR } from './variables';
import createCardItem from '../components/cardItem';
import { clearCardsListContainer } from './helper';

const createCardsListSection = (array, section) => {
  const cardsList = GET_VAR('cardsList');
  cardsList.classList.remove('start-page');
  // const categoryName = GET_VAR('categoryName');
  cardsList.dataset.category = section;
  clearCardsListContainer();
  array.forEach((element) => {
    if (element.sectionTitle === section) {
      const sectionData = element.sectionWords;
      sectionData.forEach((item) => {
        const imgPath = item.image;
        const imgAlt = item.alt;
        const cardTitle = item.word;
        const cardTranslation = item.translation;
        const cardItem = createCardItem(imgPath, imgAlt, cardTitle, cardTranslation);
        cardsList.append(cardItem);
      });
    }
  });
};

export default createCardsListSection;

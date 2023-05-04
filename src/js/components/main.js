import { createElement } from '../utils/helper';

const createMain = () => {
  // create main element
  const mainElement = createElement('main');
  mainElement.classList.add('main');

  // create main container
  const mainContainer = createElement('div');
  mainContainer.classList.add('container');

  // create score line
  const scoreLine = createElement('div');
  scoreLine.classList.add('score-line');

  mainContainer.append(scoreLine);

  // create category name
  const categoryName = createElement('h2');
  categoryName.classList.add('category-name');
  categoryName.textContent = 'Home';

  // cards list
  const cardList = createElement('ul');
  cardList.classList.add('cards-list');
  cardList.dataset.category = '';

  mainContainer.append(categoryName);
  mainContainer.append(cardList);

  mainElement.append(mainContainer);

  return mainElement;
};

export default createMain;

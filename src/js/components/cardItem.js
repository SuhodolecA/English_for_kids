/* eslint-disable import/no-cycle */
import { createElement } from '../utils/helper';

const createCardItem = (imgPath, imgAlt, cardTitle, cardTranslation = '') => {
  // create card item
  const cardItem = createElement('li');
  cardItem.classList.add('card');
  cardItem.classList.add('card-list__item');
  cardItem.dataset.section = cardTitle;

  // create card inner
  const cardInner = createElement('div');
  cardInner.classList.add('card-inner');

  // create card front side
  const cardFront = createElement('div');
  cardFront.classList.add('card-front');

  // create card front image container
  const cardFrontImgContainer = createElement('div');
  cardFrontImgContainer.classList.add('card-front__pic');
  cardFrontImgContainer.classList.add('card-pic');

  // create card front image
  const cardFrontImg = createElement('img');
  cardFrontImg.classList.add('card-front__pic-img');
  cardFrontImg.classList.add('card-img');
  cardFrontImg.src = imgPath; // data.img
  cardFrontImg.alt = imgAlt; // data.alt

  cardFrontImgContainer.append(cardFrontImg);
  cardFront.append(cardFrontImgContainer);

  // create card front title
  const cardFrontTitle = createElement('h3');
  cardFrontTitle.classList.add('card-front__title');
  cardFrontTitle.classList.add('card-title');
  cardFrontTitle.textContent = cardTitle; // data.titleFront

  cardFront.append(cardFrontTitle);

  // create card front rotate button
  const cardFrontRotateBtn = createElement('button');
  cardFrontRotateBtn.classList.add('card-front__rotate');
  cardFrontRotateBtn.classList.add('rotate-btn');
  cardFrontRotateBtn.type = 'button';
  cardFrontRotateBtn.textContent = 'rotate button';

  cardFront.append(cardFrontRotateBtn);

  // create card back side
  const cardBack = createElement('div');
  cardBack.classList.add('card-back');

  // create card back image container
  const cardBackImgContainer = createElement('div');
  cardBackImgContainer.classList.add('card-back__pic');
  cardBackImgContainer.classList.add('card-pic');

  // create card back image
  const cardBackImg = createElement('img');
  cardBackImg.classList.add('card-back__pic-img');
  cardBackImg.classList.add('card-img');
  cardBackImg.src = imgPath; // data.img
  cardBackImg.alt = imgAlt; // data.alt

  cardBackImgContainer.append(cardBackImg);

  cardBack.append(cardBackImgContainer);

  // create card back title
  const cardBackTitle = createElement('h3');
  cardBackTitle.classList.add('card-back__title');
  cardBackTitle.classList.add('card-title');
  cardBackTitle.textContent = cardTranslation; // data.titleBack

  cardBack.append(cardBackTitle);

  cardInner.append(cardFront);
  cardInner.append(cardBack);

  cardItem.append(cardInner);

  return cardItem;
};

export default createCardItem;

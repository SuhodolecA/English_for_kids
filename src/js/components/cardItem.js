/* eslint-disable import/no-cycle */
import { createElement } from '../utils/helper';

const createCardItemImg = (imgPath, imgAlt, imgClass) => {
  const cardItemImg = createElement('img');
  cardItemImg.classList.add(imgClass);
  cardItemImg.classList.add('card-img');
  cardItemImg.src = imgPath;
  cardItemImg.alt = imgAlt;

  return cardItemImg;
};

const createCardItemTitle = (titleText, titleClass) => {
  const cardTitle = createElement('h3');
  cardTitle.classList.add(titleClass);
  cardTitle.classList.add('card-title');
  cardTitle.textContent = titleText;

  return cardTitle;
};

const createCardRotateBtn = (rotateBtnClass, rotateBtnText) => {
  const cardRotateBtn = createElement('button');
  cardRotateBtn.classList.add(rotateBtnClass);
  cardRotateBtn.classList.add('rotate-btn');
  cardRotateBtn.type = 'button';
  cardRotateBtn.textContent = rotateBtnText;

  return cardRotateBtn;
};

const createCardItem = (imgPath, imgAlt, cardTitle, cardSection, cardTranslation = '', soundPath = '') => {
  // create card item
  const cardItem = createElement('li');
  cardItem.classList.add('card');
  cardItem.classList.add('card-list__item');
  cardItem.dataset.section = cardSection;
  cardItem.dataset.sound = soundPath;

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
  const cardFrontImg = createCardItemImg(imgPath, imgAlt, 'card-front__pic-img');

  cardFrontImgContainer.append(cardFrontImg);
  cardFront.append(cardFrontImgContainer);

  // create card front title
  const cardFrontTitle = createCardItemTitle(cardTitle, 'card-front__title');

  cardFront.append(cardFrontTitle);

  // create card front rotate button
  const cardFrontRotateBtn = createCardRotateBtn('card-front__rotate', 'rotate button');

  cardFront.append(cardFrontRotateBtn);

  // create card back side
  const cardBack = createElement('div');
  cardBack.classList.add('card-back');

  // create card back image container
  const cardBackImgContainer = createElement('div');
  cardBackImgContainer.classList.add('card-back__pic');
  cardBackImgContainer.classList.add('card-pic');

  // create card back image
  const cardBackImg = createCardItemImg(imgPath, imgAlt, 'card-back__pic-img');

  cardBackImgContainer.append(cardBackImg);

  cardBack.append(cardBackImgContainer);

  // create card back title
  const cardBackTitle = createCardItemTitle(cardTranslation, 'card-back__title');

  cardBack.append(cardBackTitle);

  cardInner.append(cardFront);
  cardInner.append(cardBack);

  cardItem.append(cardInner);
  return cardItem;
};

export default createCardItem;

import { createElement } from '../utils/helper';

// create header statistics button
const createStatisticsBtn = () => {
  const statBtn = createElement('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';

  return statBtn;
};

const statisticsBtnFunctionality = () => {
  const statBtn = document.querySelector('.statistics-button');
  statBtn.addEventListener('click', () => {
    console.log('click');
  });
};

export { createStatisticsBtn, statisticsBtnFunctionality };

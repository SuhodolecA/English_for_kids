/* eslint-disable import/no-cycle */
import { createElement } from '../utils/helper';

const createScoreLineIcon = (src) => {
  const scoreIcon = createElement('img');
  scoreIcon.classList.add('score-line__icon');
  scoreIcon.src = src;
  scoreIcon.alt = 'icon';

  return scoreIcon;
};

export default createScoreLineIcon;

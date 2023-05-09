import { createElement } from '../utils/helper';

const createPlayRepeatBtn = () => {
  const button = createElement('button');
  button.type = 'button';
  button.classList.add('play-btn');
  button.textContent = 'play';

  return button;
};

export default createPlayRepeatBtn;

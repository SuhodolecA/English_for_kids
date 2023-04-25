import { createElement } from '../utils/helper';

const createNavMenuBtn = () => {
  // create nav button
  const navMenuBtn = createElement('a');
  navMenuBtn.classList.add('header-hamburger');
  navMenuBtn.href = '#';
  navMenuBtn.textContent = 'Menu';

  const span1 = createElement('span');
  const span2 = createElement('span');
  const span3 = createElement('span');

  navMenuBtn.append(span1);
  navMenuBtn.append(span2);
  navMenuBtn.append(span3);

  return navMenuBtn;
};

export default createNavMenuBtn;

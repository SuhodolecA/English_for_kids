import { createElement } from '../utils/helper';
import createNavMenuItem from './navMenuItem';

const createNavMenu = (data) => {
  // create nav ul
  const navMenuUl = createElement('ul');
  navMenuUl.classList.add('header-menu');

  for (let i = 0; i < data.length; i += 1) {
    navMenuUl.append(createNavMenuItem(data[i].section));
  }

  return navMenuUl;
};

export default createNavMenu;

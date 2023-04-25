import data from '../../data/data.json';
import { createElement } from '../utils/helper';
import createNavMenu from './navMenu';
import createLogo from './logo';
import createToggle from './toggleBtn';
import createNavMenuBtn from './navMenuBtn';

const createHeader = () => {
  const headerElement = createElement('header');
  headerElement.classList.add('header');
  // create header logo
  const headerLogo = createLogo('English for kids', '#home');

  // create header buttons container
  const headerBtnsContainer = createElement('div');
  headerBtnsContainer.classList.add('header-buttons');

  // create header toggle
  const toggleBtn = createToggle();

  // create header statistics button
  const statBtn = createElement('button');
  statBtn.type = 'button';
  statBtn.classList.add('statistics-button');
  statBtn.textContent = 'Statistics';

  headerBtnsContainer.append(toggleBtn);
  headerBtnsContainer.append(statBtn);

  // create nav
  const headerNav = createElement('nav');
  headerNav.classList.add('header-nav');

  // create nav menu button
  const navMenuBtn = createNavMenuBtn();

  // create nav menu
  const navigationMenu = createNavMenu(data);

  headerNav.append(navMenuBtn);
  headerNav.append(navigationMenu);

  // create header container
  const headerContainer = createElement('div');
  headerContainer.classList.add('container');

  headerContainer.append(headerNav);
  headerContainer.append(headerLogo);
  headerContainer.append(headerBtnsContainer);
  headerElement.append(headerContainer);

  return headerElement;
};

export default createHeader;

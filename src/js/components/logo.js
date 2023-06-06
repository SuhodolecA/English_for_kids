import { createElement, createStartPageCardSet, hideStatTable } from '../utils/helper';
import data from '../../assets/data/data.json';
import { GET_VAR } from '../utils/variables';

const createLogo = (logoText, logoHref) => {
  // create logo
  const headerLogo = createElement('h1');
  headerLogo.classList.add('header-logo');

  const headerLogoLink = createElement('a');
  headerLogoLink.classList.add('header-logo__link');
  headerLogoLink.textContent = logoText;
  headerLogoLink.href = logoHref;

  headerLogo.append(headerLogoLink);

  return headerLogo;
};

const logoFunctionality = () => {
  /*
  const statisticsPage = document.querySelector('.statistics-page');
    const mainSection = GET_VAR('mainSection');
    const mainSectionContainer = mainSection.querySelector('.container');
    mainSectionContainer.classList.add('disappear');
    statisticsPage.classList.add('slide-down');
  */
  // const statisticsPage = document.querySelector('.statistics-page');
  // if (statisticsPage.classList.contains('slide-down')) {
  //   const mainSection = GET_VAR('mainSection');
  //   const mainSectionContainer = mainSection.querySelector('.container');
  //   statisticsPage.classList.remove('slide-down');
  //   statisticsPage.classList.add('slide-up');
  //   mainSectionContainer.classList.remove('disappear');
  //   mainSectionContainer.classList.add('appear');
  // }
  hideStatTable();
  createStartPageCardSet(data);
};

const setLogoEventListener = () => {
  const headerLogo = GET_VAR('headerLogo');
  headerLogo.addEventListener('click', logoFunctionality);
};

export { createLogo, setLogoEventListener };

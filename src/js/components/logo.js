import { createElement, createStartPageCardSet, hideStatTable } from '../utils/helper';
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

const setLogoFunctionality = () => {
  hideStatTable();
  createStartPageCardSet(GET_VAR('data'));
};

const setLogoEventListener = () => {
  const headerLogo = GET_VAR('headerLogo');
  headerLogo.addEventListener('click', setLogoFunctionality);
};

export { createLogo, setLogoEventListener };

import { createElement, createStartPageCardSet } from '../utils/helper';
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
  createStartPageCardSet(data);
};

const setLogoEventListener = () => {
  const headerLogo = GET_VAR('headerLogo');
  headerLogo.addEventListener('click', logoFunctionality);
};

export { createLogo, setLogoEventListener };

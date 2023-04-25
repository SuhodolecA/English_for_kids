import { createElement } from '../utils/helper';

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

export default createLogo;

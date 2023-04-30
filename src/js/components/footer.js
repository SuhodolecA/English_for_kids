import { createElement } from '../utils/helper';

// Stop here
const createFooter = () => {
  // create footer
  const footerElement = createElement('footer');
  footerElement.classList.add('footer');

  // create footer paragraph
  const paragraph = createElement('p');
  paragraph.classList.add('footer-text');
  paragraph.textContent = 'Created by ';

  // create footer paragraph link
  const paragraphLink = createElement('a');
  paragraphLink.classList.add('footer-text__link');
  paragraphLink.target = '_blank';
  paragraphLink.textContent = 'Anton Sukhadolets';
  paragraphLink.href = 'https://github.com/SuhodolecA';

  paragraph.append(paragraphLink);

  // create footer container
  const footerContainer = createElement('div');
  footerContainer.classList.add('container');

  footerContainer.append(paragraph);

  footerElement.append(footerContainer);

  return footerElement;
};

export default createFooter;

import { navMenuBtnFunctionality } from '../components/navMenuBtn';
import { overlayFunctionality } from '../components/overlay';
import { setNavMenuEventListener } from '../components/navMenu';
import { setLogoEventListener } from '../components/logo';

const setEventListeners = () => {
  navMenuBtnFunctionality();
  overlayFunctionality();
  setNavMenuEventListener();
  setLogoEventListener();
};

export default setEventListeners;

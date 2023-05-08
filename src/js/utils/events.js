import { navMenuBtnFunctionality } from '../components/navMenuBtn';
import { overlayFunctionality } from '../components/overlay';
import { setHamburgerMenuEventListener } from '../components/navMenu';
import { setLogoEventListener } from '../components/logo';
import { setMainSectionFunctionality } from '../components/main';
import { setToggleBtnFunctionality } from '../components/toggleBtn';

const setEventListeners = () => {
  navMenuBtnFunctionality();
  overlayFunctionality();
  setHamburgerMenuEventListener();
  setLogoEventListener();
  setMainSectionFunctionality();
  setToggleBtnFunctionality();
};

export default setEventListeners;

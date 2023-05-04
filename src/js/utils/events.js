import { toggleBtnFunctionality } from '../components/toggleBtn';
import { overlayFunctionality } from '../components/overlay';
import { setNavMenuEventListener } from '../components/navMenu';

const setEventListeners = () => {
  toggleBtnFunctionality();
  overlayFunctionality();
  setNavMenuEventListener();
};

export default setEventListeners;

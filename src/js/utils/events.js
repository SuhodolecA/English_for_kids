import { navMenuBtnFunctionality } from '../components/navMenuBtn';
import { overlayFunctionality } from '../components/overlay';
import { setHamburgerMenuEventListener } from '../components/navMenu';
import { setLogoEventListener } from '../components/logo';
import { setMainSectionFunctionality } from '../components/main';
import { setToggleBtnFunctionality } from '../components/toggleBtn';
import { setPlayRepeatBtnFunctionality } from '../components/playRepeatBtn';
import { setStatisticsTableFunctionality } from './helper';

const setEventListeners = () => {
  navMenuBtnFunctionality();
  overlayFunctionality();
  setHamburgerMenuEventListener();
  setLogoEventListener();
  setMainSectionFunctionality();
  setToggleBtnFunctionality();
  setPlayRepeatBtnFunctionality();
  setStatisticsTableFunctionality();
};

export default setEventListeners;

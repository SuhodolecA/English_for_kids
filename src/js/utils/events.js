import { setNavMenuBtnFunctionality } from '../components/navMenuBtn';
import { setOverlayFunctionality } from '../components/overlay';
import { setHamburgerMenuEventListener } from '../components/navMenu';
import { setLogoEventListener } from '../components/logo';
import { setMainSectionFunctionality } from '../components/main';
import { setToggleBtnFunctionality } from '../components/toggleBtn';
import { setPlayRepeatBtnFunctionality } from '../components/playRepeatBtn';
import { setStatisticsBtnFunctionality } from '../components/statisticsBtn';
import { repeatDiffWordsFunctionality, resetStatisticsBtnFunctionality } from '../components/statisticsPage';
import { setStatisticsTableFunctionality } from './helper';

const setEventListeners = () => {
  setNavMenuBtnFunctionality();
  setOverlayFunctionality();
  setHamburgerMenuEventListener();
  setLogoEventListener();
  setMainSectionFunctionality();
  setToggleBtnFunctionality();
  setPlayRepeatBtnFunctionality();
  setStatisticsTableFunctionality();
  setStatisticsBtnFunctionality();
  repeatDiffWordsFunctionality();
  resetStatisticsBtnFunctionality();
};

export default setEventListeners;

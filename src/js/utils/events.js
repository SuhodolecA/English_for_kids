import { navMenuBtnFunctionality } from '../components/navMenuBtn';
import { overlayFunctionality } from '../components/overlay';
import { setHamburgerMenuEventListener } from '../components/navMenu';
import { setLogoEventListener } from '../components/logo';
import { setMainSectionFunctionality } from '../components/main';
import { setToggleBtnFunctionality } from '../components/toggleBtn';
import { setPlayRepeatBtnFunctionality } from '../components/playRepeatBtn';
import { statisticsBtnFunctionality } from '../components/statisticsBtn';
import { repeatDiffWordsFunctionality, resetStatisticsBtnFunctionality } from '../components/statisticsPage';
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
  statisticsBtnFunctionality();
  repeatDiffWordsFunctionality();
  resetStatisticsBtnFunctionality();
};

export default setEventListeners;

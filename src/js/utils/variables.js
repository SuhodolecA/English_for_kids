const VARIABLES = {
  mainSection: 'initial value',
  categoryName: 'initial value',
  cardsList: 'initial value',
  soundsList: 'initial value',
  hamburgerBtn: 'initial value',
  headerNav: 'initial value',
  headerMenu: 'initial value',
  navMenuLinks: 'initial value',
  headerLogo: 'initial value',
  overlay: 'initial value',
  body: 'initial value',
  toggleBtn: 'initial value',
  isPlayMode: 'initial value',
  playRepeatBtn: 'initial value',
  scoreLine: 'initial value',
  modalWindow: 'initial value',
  modalWindowIcon: 'initial value',
  modalWindowText: 'initial value',
  modalWindowIconWin: 'assets/images/score-icons/win-icon.png',
  modalWindowIconLose: 'assets/images/score-icons/lose-icon.png',
  statisticData: [],
};

const SET_VAR = (name, value) => {
  if (Object.prototype.hasOwnProperty.call(VARIABLES, name)) {
    VARIABLES[name] = value;
  }
};

const GET_VAR = (name) => {
  if (Object.prototype.hasOwnProperty.call(VARIABLES, name)) {
    return VARIABLES[name];
  }
  return false;
};

export { SET_VAR, GET_VAR };

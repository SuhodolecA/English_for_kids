const VARIABLES = {
  categoryName: 'initial value',
  cardsList: 'initial value',
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

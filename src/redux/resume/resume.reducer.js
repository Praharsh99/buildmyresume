import ResumeActionTypes from './resume.types';

const colorsArray = ['#4fb298', '#e76650', '#3083dc', '#bb3d76'];

const INITIAL_STATE = {
  color: `${colorsArray[Math.floor(Math.random() * colorsArray.length)]}`,
  font: 'Poppins',
};

const resumeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ResumeActionTypes.SET_MAIN_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    case ResumeActionTypes.SET_MAIN_FONT:
      return {
        ...state,
        font: action.payload,
      };

    default:
      return state;
  }
};

export default resumeReducer;

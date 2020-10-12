import ResumeActionTypes from './resume.types';
import {
  addNewSkillToState,
  removeSkillFromState,
  changeSectionState,
} from './resume.utils';

const colorsArray = ['#4fb298', '#e76650', '#3083dc', '#bb3d76'];

const INITIAL_STATE = {
  color: `${colorsArray[Math.floor(Math.random() * colorsArray.length)]}`,
  font: 'Poppins',
  skills: [],
  loader: false,
  sections: {
    picture: true,
    profile: false,
    birthdate: true,
    martialstatus: false,
    address: true,
    nationality: true,
    email: true,
    mobile: false,
    linkedin: true,
    github: true,
    portfolio: false,
    name: true,
    profession: true,
    professional: true,
    projects: false,
    education: true,
    skills: false,
  },
  previewImageUrl: null,
  profilePicture: null,
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

    case ResumeActionTypes.ADD_NEW_SKILL:
      return {
        ...state,
        skills: addNewSkillToState(state.skills, action.payload),
      };

    case ResumeActionTypes.REMOVE_SKILL:
      return {
        ...state,
        skills: removeSkillFromState(state.skills, action.payload),
      };

    case ResumeActionTypes.TOGGLE_SECTION:
      return {
        ...state,
        sections: changeSectionState(state.sections, action.payload),
      };

    case ResumeActionTypes.SET_PREVIEW_IMAGE_URL:
      return {
        ...state,
        previewImageUrl: action.payload,
      };

    case ResumeActionTypes.SET_PROFILE_PICTURE:
      return {
        ...state,
        profilePicture: action.payload,
      };

    case ResumeActionTypes.TOGGLE_LOADER:
      return {
        ...state,
        loader: !state.loader,
      };

    default:
      return state;
  }
};

export default resumeReducer;

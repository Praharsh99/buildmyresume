import ResumeActionTypes from './resume.types';

export const setMainColor = (color) => ({
  type: ResumeActionTypes.SET_MAIN_COLOR,
  payload: color,
});

export const setMainFont = (font) => ({
  type: ResumeActionTypes.SET_MAIN_FONT,
  payload: font,
});

export const addNewSkill = (skill) => ({
  type: ResumeActionTypes.ADD_NEW_SKILL,
  payload: skill,
});

export const removeSkill = (skillName) => ({
  type: ResumeActionTypes.REMOVE_SKILL,
  payload: skillName,
});

export const toggleSection = (sectionName) => ({
  type: ResumeActionTypes.TOGGLE_SECTION,
  payload: sectionName,
});

export const setPreviewImageUrl = (dataUrl) => ({
  type: ResumeActionTypes.SET_PREVIEW_IMAGE_URL,
  payload: dataUrl,
});

export const setProfilePicture = (picture) => ({
  type: ResumeActionTypes.SET_PROFILE_PICTURE,
  payload: picture,
});

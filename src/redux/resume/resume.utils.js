export const addNewSkillToState = (allSkills, newSkill) => {
  const alreadyExists = allSkills.find(
    (skill) => skill.language === newSkill.language
  );

  if (!alreadyExists) return [...allSkills, newSkill];

  return allSkills;
};

export const removeSkillFromState = (allSkills, skillToRemove) => {
  return allSkills.filter((skill) => skill.language !== skillToRemove);
};

export const changeSectionState = (allSections, sectionToChange) => {
  return {
    ...allSections,
    [sectionToChange]: !allSections[sectionToChange],
  };
};

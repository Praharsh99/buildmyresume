import React from 'react';
import { connect } from 'react-redux';

import CancelIcon from '@material-ui/icons/Cancel';

import { selectSkills } from '../../redux/resume/resume.selectors';
import { removeSkill } from '../../redux/resume/resume.actions';

import './skills-section.style.css';

const SkillsSection = ({ mySkills, removeSkill }) => {
  const handleClick = (skillName) => {
    removeSkill(skillName);
  };

  return (
    <div className="skillsSection">
      {mySkills?.map((skill) => (
        <span>
          <CancelIcon
            onClick={() => {
              handleClick(skill.language);
            }}
          />
          <img src={skill.src} alt={skill.language} />
        </span>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  mySkills: selectSkills(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeSkill: (skillName) => dispatch(removeSkill(skillName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsSection);

import React from 'react';
import PropTypes from 'prop-types';
import SkillListItem from './components/SkillListItem';

const SkillList = ({ skills }) => {

  return (
    <div>
      {skills.map((item, idx) => (
        <SkillListItem key={`${item.name}_${idx}`} name={item.name} rating={item.rating} />
      ))}
    </div>
  );

};

SkillList.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number
  }))
};

export default SkillList;
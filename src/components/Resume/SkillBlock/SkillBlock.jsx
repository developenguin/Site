import CodeIcon from '@material-ui/icons/Code';
import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Heading';
import Hexagon from '../../Hexagon';
import * as styles from './SkillBlock.module.css';
import SkillList from '../SkillList';

const SkillBlock = ({ name, items, IconComponent }) => {

  return (
    <div className="row">
      <div className="col-100 d-flex flex-column align-items-center">
        <Hexagon size={75} backgroundColor="#ffffff" borderColor="#0b486b">
          <IconComponent classes={{ root: styles.hexagonIcon }}/>
        </Hexagon>
        <Heading variant="h3">{name}</Heading>
      </div>
      <div className="col-100">
        <SkillList skills={items} />
      </div>
    </div>
  );

};

SkillBlock.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired
  })).isRequired,
  IconComponent: PropTypes.elementType
};

export default SkillBlock;
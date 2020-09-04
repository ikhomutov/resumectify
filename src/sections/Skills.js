import React from 'react';

import withSection from '../components/Section';
import SkillsGroup from '../components/SkillsGroup';
import SkillsList from '../components/SkillsList';


function Skills({ data }) {
  if (Array.isArray(data)) {
    return (
      <SkillsList data={ data } />
    )
  } else if (typeof data === 'object') {
    return (
      <>
        {Object.entries(data).map(([key, value]) => {
          return (
            <SkillsGroup key={ key } name={ key } skills={ value } />
          )
        })}
      </>
    )
  } else {
    return null
  }
}

export default withSection(Skills, { title: 'Skills' })

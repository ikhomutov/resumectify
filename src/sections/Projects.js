import React from 'react';

import SecondaryItem from '../components/SecondaryItem';
import withSection from '../components/Section';


function Projects({ data }) {

  return (
    <>
      {data.map((value, index) => {
        return (
          <SecondaryItem 
            key={ index }
            title={ value.name }
            date={ value.dates }
            url={ value.link }
            description={ value.description }
            listItems={ value.achievements }
          />
        )
      })}
    </>
  )
}

export default withSection(Projects, { title: 'Projects' })

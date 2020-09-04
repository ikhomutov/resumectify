import React from 'react';

import SecondaryItem from '../components/SecondaryItem';
import withSection from '../components/Section';


function Courses({ data }) {

  return (
    <>
      {data.map((value, index) => {
        return (
          <SecondaryItem 
            title={ value.name }
            date={ value.date }
            company={ value.company }
            description={ value.description }
          />
        )
      })}
    </>
  )
}

export default withSection(Courses, { title: 'Courses' })

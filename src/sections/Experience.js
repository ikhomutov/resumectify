import React from 'react';

import PrimaryItem from '../components/PrimaryItem';
import withSection from '../components/Section'


function Experience(props) {
  const { data } = props;

  return (
    <>
      {data.map((value, index) => {
        return (
          <PrimaryItem
            key={ index }
            title={ value.position }
            company={ value.company }
            url={ value.website }
            dates={ value.dates }
            location={ value.location }
            description={ value.description }
            listTitle='Responsibilities'
            listItems={ value.responsibilities }
          />
        )
      })}
    </>
  )
}

export default withSection(Experience, { title: 'Experience' })

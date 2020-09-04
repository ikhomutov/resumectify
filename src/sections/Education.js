import React from 'react';

import PrimaryItem from '../components/PrimaryItem';
import withSection from '../components/Section';


function Education(props) {
  const { data } = props;

  return (
    <>
      {data.map((value, index) => {
        return (
          <PrimaryItem
            title={ value.degree }
            company={ value.school }
            url={ value.website }
            dates={ value.dates }
            location={ value.location }
            description={ value.description }
            listTitle='Courses'
            listItems={ value.courses }
          />
        )
      })}
    </>
  )
}

export default withSection(Education, { title: 'Education' })

import React from 'react';

import SecondaryItem from '../components/SecondaryItem';
import withSection from '../components/Section';


function Certificates({ data }) {

  return (
    <>
      {data.map((value, index) => {
        return (
          <SecondaryItem 
            title={ value.name }
            date={ value.date }
            description={ value.description }
          />
        )
      })}
    </>
  )
}

export default withSection(Certificates, { title: 'Certificates' })

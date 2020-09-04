import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import ContactItem from '../components/ContactItem';


export default function Contacts({ data }) {

  return (
    <List disablePadding>
      {Object.keys(data)
        .filter((key) => {return data[key]})
        .map((key) => {
          return (
            <ListItem dense disableGutters key={key}>
              <ContactItem type={key} text={data[key]} />
            </ListItem>
          )
        })
      }
    </List>
  )
}

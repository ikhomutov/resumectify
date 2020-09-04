import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import useStyles from './Languages.styles';
import withSection from '../components/Section';


function Languages({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      {data.map((language, index) => (
        <Grid item xs={3} key={index} className={ classes.item }>
          <Box className={ classes.name }>
            { language.language }
          </Box>
          <Box className={ classes.level }>
            { language.fluency }
          </Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default withSection(Languages, { title: 'Languages' })

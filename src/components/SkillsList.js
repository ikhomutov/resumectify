import React from 'react';
import Grid from '@material-ui/core/Grid';

import { useStyles } from './SkillsList.styles';


export default function SkillsList({ data }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      { data.map((skill, index) => <Grid item key={ index } className={ classes.skillsItem }>{ skill }</Grid>)}
    </Grid>
  )
}


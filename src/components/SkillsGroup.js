import React from 'react';
import Grid from '@material-ui/core/Grid';

import useStyles from './SkillsGroup.styles';


export default function SkillsGroup({ name, skills }) {
  const classes = useStyles();

  return (
    <Grid container className={ classes.wraper }>
      <Grid item className={ classes.title }>{ name }</Grid>
      <Grid item>
        <Grid container spacing={2}>
          { skills.map((skill, index) => <Grid item key={ index } className={ classes.skill }>{ skill }</Grid>)}
        </Grid>
      </Grid>
    </Grid>
  )
}

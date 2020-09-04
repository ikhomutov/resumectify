import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './Basic.styles';


export default function Basic(props) {
  const { name, title, summary, photo } = props;
  const classes = useStyles();

  document.title = `${name} - ${title}`;

  return (
    <Grid container justify='space-between'>
      <Grid item>
        <Typography className={ classes.name } variant='h1' color='primary'>{name}</Typography>
        <Typography className={ classes.title } variant='h2' color='secondary'>{title}</Typography>
        {summary && <Typography className={ classes.summary }>{summary}</Typography>}
      </Grid>
      <Grid item>
        {photo && <Avatar src={photo} alt={name} className={classes.avatar} />}
      </Grid>
    </Grid>
  )
}

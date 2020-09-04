import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './Section.styles';


export default function withSection(WrappedComponent, { title, data }) {
  return function (props) {
    const classes = useStyles();

    return (
      <Box component="section" className={ classes.wraper }>
        <Typography className={ classes.title } variant='h3' color='primary'>
          { title }
        </Typography>
        <Box className={ classes.content }>
          <WrappedComponent { ...props } />
        </Box>
      </Box>
    )
  }
}

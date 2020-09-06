import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Basic from './sections/Basic';
import Contacts from './sections/Contacts';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import Projects from './sections/Projects';
import Courses from './sections/Courses';
import Interests from './sections/Interests';

import useStyles from './Resume.styles';


export default function Resume ({ data }) {
  const classes = useStyles()

  return (
    <Container className={ classes.container }>
      <Paper elevation={2} className={ classes.paper }>
        <Grid container className={ classes.header } justify='space-between'>
          <Grid item className={ classes.basic }>
            <Basic
              name={ data.name }
              title={ data.title }
              summary={ data.summary }
              photo={ data.photo }
            />
          </Grid>
          <Grid item className={ classes.contacts }><Contacts data={ data.contacts } /></Grid>
        </Grid>
        {data.skills && <Skills data={ data.skills } />}
        {data.experience && <Experience data={ data.experience } />}
        {data.education && <Education data={ data.education } />}
        {data.projects && <Projects data={ data.projects } />}
        {data.courses && <Courses data={ data.courses } />}
        {data.languages && <Languages data={ data.languages } />}
        {data.interests && <Interests data={ data.interests } />}
      </Paper>
    </Container>
  )
}

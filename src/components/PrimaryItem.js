import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as OpenInNew } from '@mdi/svg/svg/open-in-new.svg';

import useStyles from './PrimaryItem.styles';

export default function PrimaryItem(props) {
  const { title, company, url, dates, location, description, listTitle, listItems, keywords } = props;
  const classes = useStyles();

  return (
    <Box className={ classes.wraper }>
      <Typography className={ classes.title } variant='h4'>
        { title }
      </Typography>
      <Typography className={ classes.company }>
        { company }
        <Box component='span' mx={0.3} />
        { url && 
          <Link href={ url } className={ classes.url }>
            <SvgIcon component={OpenInNew} fontSize='inherit'/>
          </Link>
        }
      </Typography>
      <Grid container justify='space-between'>
        <Grid item className={ classes.dates }>{ dates }</Grid>
        <Grid item className={ classes.location }>{ location }</Grid>
      </Grid>
      <Typography className={ classes.description }>
        { description }
      </Typography>
      { listItems &&
        <Box>
          <Box className={ classes.listTitle }>
            { listTitle }:
          </Box>
          { listItems.map((item, index) => (
            <Grid container key={ index } className={ classes.listItem } alignItems='center'>
              <Grid item className={ classes.listBullet } />
              <Box component='span' mx={0.5} />
              <Grid item>
                { item }
              </Grid>
            </Grid>
          ))}
        </Box>
      }
      { keywords &&
        <Grid container spacing={1}>
          { keywords.map((keyword, index) => (
            <Grid item>
              <Chip label={ keyword } variant='outlined' size='small' />
            </Grid>
          ))}
        </Grid>
      }
    </Box>
  )
}

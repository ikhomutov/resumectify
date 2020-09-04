import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as OpenInNew } from '@mdi/svg/svg/open-in-new.svg';

import useStyles from './SecondaryItem.styles';

export default function PrimaryItem(props) {
  const { title, company, url, date, description, listItems } = props;
  const classes = useStyles();

  return (
    <Box className={classes.wraper}>
      <Typography className={ classes.title } variant='h4'>
        { title } 
        { url && <Link href={ url }><SvgIcon component={ OpenInNew } fontSize='inherit'/></Link>}
      </Typography>
      { date && <Typography item className={ classes.date }>{ date }</Typography> }
      { company &&
        <Typography className={ classes.company }>
          { company }
        </Typography>
      }
      { description &&
        <Typography className={ classes.description }>
          { description }
        </Typography>
      }
      { listItems &&
        <Box>
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
    </Box>
  )
}

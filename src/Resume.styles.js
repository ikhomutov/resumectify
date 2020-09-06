import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
  },
  paper: {
    minHeight: '1280px',
    width: '890px',
    margin: 'auto',
    '@media print': {
      boxShadow: 'none',
    },
  },
  header: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  basic: {
    width: '60%',
  },
  contacts: {
    width: '40%',
  },
}));

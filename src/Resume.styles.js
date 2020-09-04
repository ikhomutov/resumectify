import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  paper: {
    minHeight: '1280px',
    width: '890px',
    margin: 'auto',
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

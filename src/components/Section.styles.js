import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  wraper: {
    marginBottom: theme.spacing(3),
    paddingBottom: theme.spacing(1),
  },
  title: {
    textAlign: 'center',
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    padding: '6px 37px',
    textTransform: 'uppercase',
    borderBottom: '2px solid black',
    borderTop: '2px solid black',
  },
  content: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
}));

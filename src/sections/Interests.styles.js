import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  item: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    borderRadius: theme.spacing(1),
    borderWidth: '1.5px',
    borderColor: theme.palette.primary.main,
    borderStyle: 'solid',
  },
}));

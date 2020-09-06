import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  wraper: {
    marginBottom: theme.spacing(3),
    '@media print': {
      pageBreakInside: 'avoid',
    },
  },
  title: {
    fontSize: '21px',
    fontWeight: 700,
  },
  company: {
    marginBottom: theme.spacing(0.25),
  },
  dates: {
    fontStyle: 'italic',
    color: theme.palette.primary.main,
  },
  location: {
    fontStyle: 'italic',
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.secondary.main,
  },
  url: {
    verticalAlign: 'middle',
  },
  listTitle: {
    fontStyle: 'italic',
    marginBottom: theme.spacing(0.5),
  },
  listBullet: {
    width: theme.spacing(1),
    height: '1px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.primary.main,
  },
  listItem: {
    marginBottom: theme.spacing(1),
  },
}));

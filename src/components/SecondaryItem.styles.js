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
  },
  company: {
  },
  date: {
    fontStyle: 'italic',
    color: theme.palette.primary.main,
  },
  description: {
    color: theme.palette.secondary.main,
  },
  url: {
    verticalAlign: 'middle',
  },
  icon: {
    fontSize: '1rem',
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

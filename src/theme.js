import { createMuiTheme } from '@material-ui/core/styles';
import { red, pink, blue, cyan, teal, orange, green, grey } from '@material-ui/core/colors';
import { userColor } from './config';

const muiColorMapping = {
  blue,
  cyan,
  teal,
  orange,
  green,
  red,
  pink,
}

function getThemeColor() {
  return muiColorMapping[userColor] || blue
}

export const theme = createMuiTheme({
  palette: {
    primary: getThemeColor(),
    secondary: {
      main: grey[700],
    },
  },
});

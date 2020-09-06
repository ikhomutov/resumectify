import { createMuiTheme } from '@material-ui/core/styles';
import { red, pink, blue, cyan, teal, orange, green, grey } from '@material-ui/core/colors';

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
  const userColor = muiColorMapping[process.env.REACT_APP_COLOR]
  return userColor || blue
}

export const theme = createMuiTheme({
  palette: {
    primary: getThemeColor(),
    secondary: {
      main: grey[700],
    },
  },
});

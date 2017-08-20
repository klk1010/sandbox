import theme from './theme';
import colors from './colors';

const themeHelper = ({ ...props }) => {
  if (!props) {
    return theme.default;
  }

  const specifier = Object.keys(colors).filter(color => Object.keys(props).includes(color));
  if (!specifier) {
    return theme.default;
  }

  return theme[specifier];
};

export default themeHelper;

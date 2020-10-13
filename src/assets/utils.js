export const getTheVariableFontValue = (size) => {
  switch (size) {
    case 'small':
      return -2;

    case 'medium':
      return 0;

    case 'large':
      return 2;

    default:
      return 0;
  }
};

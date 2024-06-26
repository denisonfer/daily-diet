import theme from '@styles/theme';

export default function getBackgroundColor(withinDiet: boolean | undefined): {
  bcgColor: string;
  backIconColor: string;
} {
  switch (withinDiet) {
    case true:
      return {
        bcgColor: theme.colorsProduct.greenLight,
        backIconColor: theme.colorsProduct.greenDark,
      };
    case false:
      return {
        bcgColor: theme.colorsProduct.redLight,
        backIconColor: theme.colorsProduct.redDark,
      };
    default:
      return {
        bcgColor: theme.colorsBase.gray500,
        backIconColor: theme.colorsBase.gray200,
      };
  }
}

import type { TextStyle } from "react-native";
import theme from "./themeV2.style";

export const textPrimary: TextStyle = {
  fontStyle: "normal",
  color: "#FFFFFF",
  fontWeight: "500",
  fontSize: 14,
  lineHeight: 21,
};

export const fontRegular: TextStyle = {
  // fontFamily: 'SFProText',
};

export const fontBold: TextStyle = {
  // fontFamily: 'SFProText',
};

export const textHugeBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_HUGE,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_LARGE * 1.4,
};

export const textHuge: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_HUGE,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_LARGE * 1.4,
};

export const textLarge: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_LARGE,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_LARGE * 1.4,
};

export const textLargeBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_LARGE,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_LARGE * 1.4,
};

export const textNormal: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_NORMAL,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_NORMAL * 1.4,
};

export const textNormalBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_NORMAL,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_NORMAL * 1.4,
};

export const textNormalSecondary: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_NORMAL,
  color: theme.SECONDARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_NORMAL * 1.4,
};

export const textNormalGrey: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_NORMAL,
  color: theme.SECONDARY_TEXT_COLOR_GRAY,
  lineHeight: theme.FONT_SIZE_NORMAL * 1.4,
};

export const textNormalBoldSecondary: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_NORMAL,
  color: theme.SECONDARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_NORMAL * 1.4,
};

export const textMedium: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_MEDIUM,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_MEDIUM * 1.4,
};

export const textMediumBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_MEDIUM,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_MEDIUM * 1.4,
};

export const textSmall: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textSmallBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textSmallBlue: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.SECONDARY_TEXT_COLOR_BLUE,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textSmallGray: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.SECONDARY_TEXT_COLOR_GRAY,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textSmallSecondary: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.SECONDARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textSmallTertiary: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_SMALL,
  color: theme.TERTIARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_SMALL * 1.4,
};

export const textMini: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_MINI,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_MINI * 1.4,
};

export const textMiniSecondary: TextStyle = {
  ...fontRegular,
  fontSize: theme.FONT_SIZE_MINI,
  color: theme.SECONDARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_MINI * 1.4,
};

export const textMiniBold: TextStyle = {
  ...fontBold,
  fontSize: theme.FONT_SIZE_MINI,
  color: theme.PRIMARY_TEXT_COLOR,
  lineHeight: theme.FONT_SIZE_MINI * 1.4,
};

import baseColors from './baseColors';

const colors = {
  /************ BASE COLORS ************/
  ...baseColors,

  /************ BG ************/
  // BRAND
  BG_BRAND_WEAKEST: baseColors.primary[5],
  BG_BRAND_WEAKER: baseColors.primary[10],
  BG_BRAND_WEAK: baseColors.primary[40],
  BG_BRAND_NORMAL: baseColors.primary[50],
  BG_BRAND_STRONG: baseColors.primary[60],

  //ACCENT
  BG_ACCENT_WEAKEST: baseColors.blue[5],
  BG_ACCENT_WEAKER: baseColors.blue[10],
  BG_ACCENT_WEAK: baseColors.blue[40],
  BG_ACCENT_NORMAL: baseColors.blue[50],
  BG_ACCENT_STRONG: baseColors.blue[60],

  // NEGATIVE
  BG_NEGATIVE_WEAKEST: baseColors.red[5],
  BG_NEGATIVE_WEAKER: baseColors.red[10],
  BG_NEGATIVE_WEAK: baseColors.red[40],
  BG_NEGATIVE_NORMAL: baseColors.red[50],
  BG_NEGATIVE_STRONG: baseColors.red[60],

  // POSITIVE
  BG_POSITIVE_WEAKEST: baseColors.green[5],
  BG_POSITIVE_WEAKER: baseColors.green[10],
  BG_POSITIVE_WEAK: baseColors.green[40],
  BG_POSITIVE_NORMAL: baseColors.green[50],
  BG_POSITIVE_STRONG: baseColors.green[60],

  // WARNING
  BG_WARNING_WEAKEST: baseColors.yellow[5],
  BG_WARNING_WEAKER: baseColors.yellow[10],
  BG_WARNING_WEAK: baseColors.yellow[40],
  BG_WARNING_NORMAL: baseColors.yellow[50],
  BG_WARNING_STRONG: baseColors.yellow[60],

  // NEUTRAL
  BG_SURFACE: baseColors.grey[0],
  BG_NEUTRAL_WEAKEST: baseColors.grey[5],
  BG_NEUTRAL_WEAKER: baseColors.grey[10],
  BG_NEUTRAL_WEAK: baseColors.grey[20],
  BG_NEUTRAL_NORMAL: baseColors.grey[30],
  BG_NEUTRAL_STRONG: baseColors.grey[90],
  BG_INVERTED: baseColors.grey[100],

  /************ TEXT ************/
  // BRAND
  TEXT_BRAND_WEAKEST: baseColors.primary[20],
  TEXT_BRAND_WEAK: baseColors.primary[40],
  TEXT_BRAND_NORMAL: baseColors.primary[50],
  TEXT_BRAND_STRONG: baseColors.primary[60],

  // ACCENT
  TEXT_ACCENT_WEAKEST: baseColors.blue[20],
  TEXT_ACCENT_WEAK: baseColors.blue[40],
  TEXT_ACCENT_NORMAL: baseColors.blue[50],
  TEXT_ACCENT_STRONG: baseColors.blue[60],

  // NEGATIVE
  TEXT_NEGATIVE_WEAKEST: baseColors.red[20],
  TEXT_NEGATIVE_WEAK: baseColors.red[40],
  TEXT_NEGATIVE_NORMAL: baseColors.red[50],
  TEXT_NEGATIVE_STRONG: baseColors.red[60],

  // POSITIVE
  TEXT_POSITIVE_WEAKEST: baseColors.green[20],
  TEXT_POSITIVE_WEAK: baseColors.green[40],
  TEXT_POSITIVE_NORMAL: baseColors.green[50],
  TEXT_POSITIVE_STRONG: baseColors.green[60],

  // WARNING
  TEXT_WARNING_WEAKEST: baseColors.yellow[20],
  TEXT_WARNING_WEAK: baseColors.yellow[40],
  TEXT_WARNING_NORMAL: baseColors.yellow[50],
  TEXT_WARNING_STRONG: baseColors.yellow[60],

  // NEUTRAL
  TEXT_INVERTED: baseColors.grey[0],
  TEXT_NEUTRAL_WEAKEST: baseColors.grey[30],
  TEXT_NEUTRAL_WEAKER: baseColors.grey[40],
  TEXT_NEUTRAL_WEAK: baseColors.grey[50],
  TEXT_NEUTRAL_NORMAL: baseColors.grey[70],
  TEXT_NEUTRAL_STRONG: baseColors.grey[90],

  /************ BORDER ************/
  // BRAND
  BORDER_BRAND_WEAKEST: baseColors.primary[10],
  BORDER_BRAND_WEAK: baseColors.primary[30],
  BORDER_BRAND_NORMAL: baseColors.primary[50],
  BORDER_BRAND_STRONG: baseColors.primary[60],

  // ACCENT
  BORDER_ACCENT_WEAKEST: baseColors.blue[10],
  BORDER_ACCENT_WEAK: baseColors.blue[30],
  BORDER_ACCENT_NORMAL: baseColors.blue[50],
  BORDER_ACCENT_STRONG: baseColors.blue[60],

  // NEGATIVE
  BORDER_NEGATIVE_WEAKEST: baseColors.red[10],
  BORDER_NEGATIVE_WEAK: baseColors.red[30],
  BORDER_NEGATIVE_NORMAL: baseColors.red[50],
  BORDER_NEGATIVE_STRONG: baseColors.red[60],

  // POSITIVE
  BORDER_POSITIVE_WEAKEST: baseColors.green[10],
  BORDER_POSITIVE_WEAK: baseColors.green[30],
  BORDER_POSITIVE_NORMAL: baseColors.green[50],
  BORDER_POSITIVE_STRONG: baseColors.green[60],

  // WARNING
  BORDER_WARNING_WEAKEST: baseColors.yellow[10],
  BORDER_WARNING_WEAK: baseColors.yellow[30],
  BORDER_WARNING_NORMAL: baseColors.yellow[50],
  BORDER_WARNING_STRONG: baseColors.yellow[60],

  // NEUTRAL
  BORDER_INVERTED: baseColors.grey[0],
  BORDER_NEUTRAL_WEAKEST: baseColors.grey[10],
  BORDER_NEUTRAL_WEAK: baseColors.grey[20],
  BORDER_NEUTRAL_NORMAL: baseColors.grey[50],
  BORDER_NEUTRAL_STRONG: baseColors.grey[60],

  /************ ICON ************/
  // BRAND
  ICON_BRAND_WEAKEST: baseColors.primary[20],
  ICON_BRAND_WEAK: baseColors.primary[40],
  ICON_BRAND_NORMAL: baseColors.primary[50],
  ICON_BRAND_STRONG: baseColors.primary[60],

  // ACCENT
  ICON_ACCENT_WEAKEST: baseColors.blue[20],
  ICON_ACCENT_WEAK: baseColors.blue[40],
  ICON_ACCENT_NORMAL: baseColors.blue[50],
  ICON_ACCENT_STRONG: baseColors.blue[60],

  // NEGATIVE
  ICON_NEGATIVE_WEAKEST: baseColors.red[20],
  ICON_NEGATIVE_WEAK: baseColors.red[40],
  ICON_NEGATIVE_NORMAL: baseColors.red[50],
  ICON_NEGATIVE_STRONG: baseColors.red[60],

  // POSITIVE
  ICON_POSITIVE_WEAKEST: baseColors.green[20],
  ICON_POSITIVE_WEAK: baseColors.green[40],
  ICON_POSITIVE_NORMAL: baseColors.green[50],
  ICON_POSITIVE_STRONG: baseColors.green[60],

  // WARNING
  ICON_WARNING_WEAKEST: baseColors.yellow[20],
  ICON_WARNING_WEAK: baseColors.yellow[40],
  ICON_WARNING_NORMAL: baseColors.yellow[50],
  ICON_WARNING_STRONG: baseColors.yellow[60],

  // NEUTRAL
  ICON_INVERTED: baseColors.grey[0],
  ICON_NEUTRAL_WEAKEST: baseColors.grey[30],
  ICON_NEUTRAL_WEAKER: baseColors.grey[40],
  ICON_NEUTRAL_WEAK: baseColors.grey[50],
  ICON_NEUTRAL_NORMAL: baseColors.grey[70],
  ICON_NEUTRAL_STRONG: baseColors.grey[90],
};

export default colors;

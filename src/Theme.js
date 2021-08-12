import ChangaMedium from "./fonts/Changa-Medium.ttf";
import ChangaOne from "./fonts/ChangaOne-Regular.ttf";

const changa = {
  fontFamily: "Changa",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "500",
  src: `
   local('Changa'),
   local('Changa-Regular'),
   url(${ChangaMedium}) format('truetype')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

const changaOne = {
  fontFamily: "ChangaOne",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: "400",
  src: `
   local('ChangaOne'),
   local('ChangaOne'),
   url(${ChangaOne}) format('truetype')
 `,
  unicodeRange:
    "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF",
};

export { changa, changaOne };

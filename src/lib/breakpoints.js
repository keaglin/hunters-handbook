const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '755px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
  lsMobileS: '640px',
  lsMobileM: '820px',
  lsTablet: '1536px'
}

export const breakpoint = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
  lsMobileS: `(max-height: ${size.lsMobileS})`,
  lsMobileM: `(max-height: ${size.lsMobileM})`,
  lsTablet: `(max-height: ${size.lsTablet})`
}

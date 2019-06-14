import Typography from "typography"
import customTheme from "typography-theme-ocean-beach"

customTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

const typography = new Typography(customTheme)

typography.overrideStyles = () => {
  return {
    body: {
      background: '#F7F7F7'
    }
  }
}

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale

// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
declare module "*.png"
declare module "*.jpg"
declare module 'typography-theme-ocean-beach'

interface ILocation {
  host: string
  hostname: string
  href: string
  key: string
  origin: string
  pathname: string
  port: string
}

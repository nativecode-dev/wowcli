import { Options } from 'yargs'

export interface AppOptions {
  [key: string]: Options
}

export interface Global {
  wowdirs: string[]
}

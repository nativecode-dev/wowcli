export * from './Global'

import { Argv, Options } from 'yargs'

import { Global } from './Global'

export default function AddOption<T extends Global>(argv: Argv, name: string, options: Options): Argv {
  return argv.option(name, options)
}

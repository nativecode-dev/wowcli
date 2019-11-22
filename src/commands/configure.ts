import { CommandModule, Arguments, Argv } from 'yargs'

import { Global } from '../options/Global'

export interface ConfigureOptions extends Global {}

const ConfigureCommand: CommandModule<{}, ConfigureOptions> = {
  aliases: ['config', 'cfg'],
  command: 'configure',
  handler: (args: Arguments<ConfigureOptions>) => {
    console.log(args)
  },
}

export default ConfigureCommand

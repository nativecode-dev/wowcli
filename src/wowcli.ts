import yargs from 'yargs'
import findUp from 'find-up'
import findDown from 'find-down'

import ConfigureCommand, { ConfigureOptions } from './commands/configure'

async function main() {
  const configs = ['.wowcli', '.wowcli.json']

  configs.map(config => findDown(config, { cwd: process.env.HOME }))

  yargs
    .scriptName('wowcli')
    .usage('$0 <command>')
    .command<ConfigureOptions>(ConfigureCommand)
    .pkgConf('wow')
    .showHelpOnFail(true)
    .parse()
}

main().catch(console.error)

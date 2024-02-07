mdat-readme [options]

Expand description goes here.

Commands:
  mdat-readme [command] [options]     Expand mdat comment placeholders in your readme with a collection of helpful built-in expansion rules.
  mdat-readme expand [options]        Expand description goes here.  [default]
  mdat-readme init [options]          Interactively Create a new readme.md file with sensible `mdat` comment placeholders.

Options:
      --readme-file   Path to the readme file to expand.  [string] [default: The closest readme file is used by default.]
      --package-file  Path to the package.json file to use to populate the readme.  [string] [default: The closest package.json file is used by default.]
      --config        Path(s) to files containing mdat configs.  [array] [default: Configuration is loaded if found from the usual places, or defaults are used.]
  -r, --rules         Path(s) to files containing additional mdat comment expansion rules.  [array]
  -o, --output        Output file directory.  [string] [default: Same directory as your readme file. Writes rule expansions directly to your readme file.]
  -n, --name          Output file name.  [string] [default: Same directory as input file. Writes directly to your readme file.]
      --print         Print the expanded markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.  [boolean] [default: false]
      --prefix        Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdat comments in your markdown file, or if you're willing to trade some verbosity for safety.  [string]
  -m, --meta          Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.  [boolean] [default: true]
  -c, --check         Check your readme for rule violations without expanding comments. Identifies things like missing comment placeholders and incorrect placeholder ordering.  [boolean] [default: false]
      --verbose       Enable verbose logging. All verbose logs and prefixed with their log level and are printed to `stderr` for ease of redirection.  [boolean] [default: false]
  -h, --help          Show help  [boolean]
  -v, --version       Show version number  [boolean]
  
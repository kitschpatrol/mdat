mdat readme [command] [options]

Work with `mdat` comments in your readme.md.

Commands:
  mdat readme expand [options]  Expand `mdat` comment placeholders in your readme.md using a collection of helpful built-in expansion rules.  [default]
  mdat readme check [options]   Validate `mdat` placeholder comments in your readme.md.
  mdat readme clean [options]   Collapse `mdat` placeholder comments in your readme.md.
  mdat readme init [options]    Interactively create a new readme.md file with sensible `mdat` comment placeholders.

Options:
      --config   Path(s) to files containing mdat configs.  [array] [default: Configuration is loaded if found from the usual places, or defaults are used.]
  -r, --rules    Path(s) to files containing `mdat` comment expansion rules.  [array]
  -o, --output   Output file directory.  [string] [default: Same directory as input file.]
  -n, --name     Output file name.  [string] [default: Same name as input file. Overwrites the input file.]
      --readme   Path to the readme.md file to expand.  [string] [default: The closest readme.md file is used by default.]
      --package  Path to the package.json file to use to populate the readme.  [string] [default: The closest package.json file is used by default.]
      --assets   Path to find and save readme-related assets.  [string] [default: ./assets]
      --prefix   Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-`mdat` comments in your Markdown file, or if you're willing to trade some verbosity for safety.  [string]
  -m, --meta     Embed an extra comment at the top of the generated Markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.  [boolean]
      --print    Print the expanded Markdown to stdout instead of saving to a file. Ignores `--output` and `--name` options.  [boolean]
      --verbose  Enable verbose logging. All verbose logs and prefixed with their log level and are printed to stderr for ease of redirection.  [boolean]
  -h, --help     Show help  [boolean]
  -v, --version  Show version number  [boolean]

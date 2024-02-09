mdat readme init [options]

Interactively create a new readme.md file with sensible `mdat` comment placeholders.

Options:
  -i, --interactive  Run the guided interactive `init` process. Set explicitly to `false` to use default values and skip the prompt.  [boolean] [default: true]
      --overwrite    Replace an existing readme file if one is found.  [boolean] [default: `false`, if an existing readme is found, don't touch it.]
  -o, --output       Output file directory.  [string] [default: Same directory as input file.]
  -e, --expand       Automatically run `mdat readme` immediately after creating the readme template.  [boolean] [default: true]
  -t, --template     Specify a template to use for the new readme.  [string] [choices: "Mdat Readme", "Standard Readme Basic", "Standard Readme Full"] [default: "Mdat Readme"]
  -c, --compound     Use compound comment version of the template to replace several individual comment placeholders where possible. This combines things like `<!-- title -->`, `<!-- badges -->`, etc. in a single `<!-- header -->` comment. It's less clutter when you're editing, but it's also less explicit. The final readme.md output is identical.  [boolean] [default: true]
      --verbose      Enable verbose logging. All verbose logs and prefixed with their log level and are printed to stderr for ease of redirection.  [boolean]
  -h, --help         Show help  [boolean]
  -v, --version      Show version number  [boolean]

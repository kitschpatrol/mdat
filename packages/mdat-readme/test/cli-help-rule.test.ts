import { helpStringToCst } from '../src/lib/rules/cli-help/utilities/help-string-to-cst'
import { helpCstToObject } from '../src/lib/rules/cli-help/utilities/help-cst-to-object'
import { describe, expect, it } from 'vitest'
import { helpObjectToMarkdown } from '../src/lib/rules/cli-help/utilities/help-object-to-markdown'
import { getHelpMarkdown } from '../src/lib/rules/cli-help/utilities/get-help-markdown'
import cliHelpRule from '../src/lib/rules/cli-help'
import { getSoleRule } from 'remark-mdat'

const helpText1 = `tldraw-cli <command>

CLI tools for tldraw.

Commands:
	tldraw-cli <command>               CLI tools for tldraw.  [default]
	tldraw-cli export <files|urls..>   Export a local tldraw ".tldr" file or a tldraw.com URL to an svg, png, json, or tldr file. Prints the absolute path(s) to the exported image(s) to stdout.
	tldraw-cli open [files-or-urls..]  Open a tldraw \`.tldr\` file or tldraw.com URL your default browser. Uses a locally-hosted instance of tldraw. Call \`open\` without an argument to open a blank sketch. Sketches opened via URL are temporarily copied to the local system, and will not be kept in sync with tldraw.com. This process does not exit until the browser is closed.

Options:
	-h, --help     Show help  [boolean]
	-v, --version  Show version number  [boolean]
`

const helpText2 = `mdat-readme [options]

description goes here

Commands:
  mdat-readme [command] [options]     Manage and expand mdat comments in your readme file.
  mdat-readme expand [options]        description goes here  [default]
  mdat-readme init [options]          Interactively Create a new readme.md file with sensible \`mdat\` comment placeholders.

Options:
      --readme-file   Path to the readme file to expand.  [string] [default: The closest readme file is used by default.]
      --package-file  Path to the package.json file to use to populate the readme.  [string] [default: The closest package.json file is used by default.]
      --config        Path(s) to files containing mdat configs.  [array] [default: Configuration is loaded if found from the usual places, or defaults are used.]
  -r, --rules         Path(s) to files containing additional mdat comment expansion rules.  [array]
  -o, --output        Output file directory.  [string] [default: Same directory as your readme file. Writes rule expansions directly to your readme file.]
  -n, --name          Output file name.  [string] [default: Same directory as input file. Writes directly to your readme file.]
      --print         Print the expanded markdown to stdout instead of saving to a file. Ignores \`--output\` and \`--name\` options.  [boolean] [default: false]
      --prefix        Require a string prefix before all comments to be considered for expansion. Useful if you have a bunch of non-mdat comments in your markdown file, or if you're willing to trade some verbosity for safety.  [string]
  -m, --meta          Embed an extra comment at the top of the generated markdown noting the date of generation and warning editors that certain sections of the document have been generated dynamically.  [boolean] [default: true]
  -c, --check         Check your readme for rule violations without expanding comments. Identifies things like missing comment placeholders and incorrect placeholder ordering.  [boolean] [default: false]
      --verbose       Enable verbose logging. All verbose logs and prefixed with their log level and are printed to \`stderr\` for ease of redirection.  [boolean] [default: false]
  -h, --help          Show help  [boolean]
  -v, --version       Show version number  [boolean]
`

// subcommand help
const helpText3 = `tldraw-cli export <files|urls..>

Export a local tldraw ".tldr" file or a tldraw.com URL to an svg, png, json, or tldr file. Prints the absolute path(s) to the exported image(s) to stdout.

Positionals:
  <files|urls..>  The tldraw sketch to export. May be one or more paths to local \`.tldr\` files, or tldraw.com sketch URLs. Accepts a mix of both file paths and URLs, and supports glob matching via your shell. Prints the absolute path(s) to the exported image(s) to \`stdout\`.  [string]

Options:
  -f, --format       Output image format.  [string] [choices: "png", "svg", "json", "tldr"] [default: "svg"]
  -o, --output       Output image directory.  [string] [default: "./"]
  -n, --name         Output image name (without extension).  [string] [default: The original file name or URL id is used.]
      --frames       Export each sketch "frame" as a separate image. Pass one or more frame names or IDs to export specific frames, or skip the arguments to export all frames.  [array] [default: false]
  -t, --transparent  Export an image with a transparent background.  [boolean] [default: false]
  -d, --dark-mode    Export a dark theme version of the image.  [boolean] [default: false]
      --strip-style  Remove \`<style>\` elements from SVG output, useful to lighten the load of embedded fonts if you intend to provide your own stylesheets. Applies to SVG output only.  [boolean] [default: false]
  -p, --print        Print the exported image(s) to stdout instead of saving to a file. Incompatible with \`--output\`, and disregards \`--name\`. PNGs are printed as base64-encoded strings.  [boolean] [default: false]
      --verbose      Enable verbose logging. All verbose logs and prefixed with their log level and are printed to \`stderr\` for ease of redirection.  [boolean] [default: false]
  -h, --help         Show help  [boolean]
  -v, --version      Show version number  [boolean]
`

describe('cli help output cst parsing', () => {
	it('should parse help text output to a valid cst', () => {
		const cst = helpStringToCst(helpText1)
		expect(cst).toMatchSnapshot()
	})

	it('should parse different help text output to a valid cst', () => {
		const cst = helpStringToCst(helpText2)
		expect(cst).toMatchSnapshot()
	})

	it('should parse subcommand help text output to a valid cst', () => {
		const cst = helpStringToCst(helpText3)
		expect(cst).toMatchSnapshot()
	})
})

describe('cli help output cst to object transformation', () => {
	it('should parse help text cst to a valid object', () => {
		const cst = helpStringToCst(helpText1)
		const object = helpCstToObject(cst)
		expect(object).toMatchSnapshot()
	})

	it('should parse different help text cst to a valid object', () => {
		const cst = helpStringToCst(helpText2)
		const object = helpCstToObject(cst)

		expect(object).toMatchSnapshot()
	})

	it('should parse subcommand help text cst to a valid object', () => {
		const cst = helpStringToCst(helpText3)
		const object = helpCstToObject(cst)
		expect(object).toMatchSnapshot()
	})
})

describe('cli help object to markdown transformation', () => {
	it('should parse help text object to valid markdown', () => {
		const cst = helpStringToCst(helpText1)
		const object = helpCstToObject(cst)
		const markdown = helpObjectToMarkdown(object)
		expect(markdown).toMatchSnapshot()
	})

	it('should parse different help text object to valid markdown', () => {
		const cst = helpStringToCst(helpText2)
		const object = helpCstToObject(cst)
		const markdown = helpObjectToMarkdown(object)
		expect(markdown).toMatchSnapshot()
	})

	it('should parse subcommand help text object to valid markdown', () => {
		const cst = helpStringToCst(helpText3)
		const object = helpCstToObject(cst)
		const markdown = helpObjectToMarkdown(object)
		expect(markdown).toMatchSnapshot()
	})
})

describe('cli help invocation', () => {
	it('should get help markdown directly from the output of a command', async () => {
		const helpMarkdown = await getHelpMarkdown('./bin/cli.js')
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should fall back to a basic code block if the help output cannot be parsed', async () => {
		const helpMarkdown = await getHelpMarkdown('git')
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should try to infer the binary to get help from based on package.json', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content()
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should correctly identify executables', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content({ cliCommand: 'git' })
		expect(helpMarkdown).toMatchSnapshot()
	})

	it('should correctly identify non-executables', async () => {
		await expect(getSoleRule(cliHelpRule).content({ cliCommand: '/dev/null' })).rejects.toThrow()
	})

	it('should correctly resolve binary names that are in package.json but not on the path', async () => {
		const helpMarkdown = await getSoleRule(cliHelpRule).content({ cliCommand: 'mdat-readme' })
		expect(helpMarkdown).toMatchSnapshot()
	})
})

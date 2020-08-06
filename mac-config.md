# Mac Config



## Mac Apps

### General Things

* Alfred - [https://www.alfredapp.com/](https://www.alfredapp.com/)
  * Like Spotlight, but WAY better
  * Free option is way better than Spotlight
  * Paid option is ridiculously powerful, somewhat expensive at $31 year/$57 lifetime
    * Well worth it. Seriously just get the lifetime license
    * Workflows can change your life and are relatively easy to build
  * Literally the first thing I install on new machines
* Amethyst - [https://github.com/ianyh/Amethyst](https://github.com/ianyh/Amethyst)
  * Tilling window manager, sorta comparable to Spectacles
    * Most might find Spectacles more friendly: [https://www.spectacleapp.com/](https://www.spectacleapp.com/)
  * Hotkeys to switch between layouts, throw windows to spaces/screens, etc
  * Has a learning curve, but IMO really nice once you get it down
* Vanilla - [https://matthewpalmer.net/vanilla/](https://matthewpalmer.net/vanilla/)
  * Put menubar icons inside a little popout
  * Free, but the $5 “pro” version is worth it \(allows hiding, start on login, etc\)
  * There are other options for this but this one is sooooo dead simple
* f.lux - [https://justgetflux.com/](https://justgetflux.com/)
  * Beats the pants off nightshift and it’s free
* Amphetamine - [https://apps.apple.com/us/app/amphetamine/id937984704?mt=12](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12)
  * Keep mac awake
  * Has triggers IE “when connected to bluetooth” “when powered” etc
  * Great for long-running scripts
* CheatSheet - [https://www.cheatsheetapp.com/CheatSheet/](https://www.cheatsheetapp.com/CheatSheet/)
  * Hold the cmd button to show all keyboard shortcuts for app
  * Pretty handy
  * If you also get CustomShortcuts like mentioned on the page you can overwrite hotkeys easily
    * I don’t use this, personally
* Rocket - [https://matthewpalmer.net/rocket/](https://matthewpalmer.net/rocket/)
  * Allows usage of Slack-style emojis via typing `:`
  * Able to enable/disable per app
  * Totally optional but I’ve found it somewhat nice
* Bear Notes - [https://bear.app/](https://bear.app/)
  * Markdown compatible native \(fast!\) macOS note app
  * Supports extensive tagging, exporting in various formats, etc
  * Free version is totally fine
  * Paid version would be good if you have iOS devices or multiple macs
  * Must-have app, IMO
* BetterTouchTool - [https://folivora.ai/](https://folivora.ai/)
  * Customize the TouchBar extensively
  * Can do other things with keyboard shortcuts, gestures, trackpad, etc
    * I haven’t played with these yet
  * 45 day free trial, then it’s $7 for a 2 year license or $20 for a lifetime
  * Personally still on trial but I don’t see how I’m NOT going to buy a license
* Backblaze - [https://www.backblaze.com/](https://www.backblaze.com/)
  * Back up your dot files, settings, personal files, etc
  * $6/mo or $60/year per computer \(transferrable if you get a new computer\)
  * Ignore node\_modules and .git [https://chrisblackwell.me/ignore-node\_modules-and-git-folders-in-backblaze/](https://chrisblackwell.me/ignore-node_modules-and-git-folders-in-backblaze/)
* Bitwarden - [https://bitwarden.com/](https://bitwarden.com/)
  * Password manager, open source. What else do you need
  * Oh yeah it’s free for personal use
  * Also works for secure notes, CCs, etc
* ungoogled-chromium - [https://github.com/Eloston/ungoogled-chromium](https://github.com/Eloston/ungoogled-chromium)
  * Chromium without calling to Google, ever
  * Also has a bunch of extra privacy settings
  * No reason to run Chrome any more
* Dark Reader extension - [https://darkreader.org/](https://darkreader.org/)
  * Browser extension that overwrites page CSS to give just about anything a dark mode
  * Configurable down to a per-domain basis
  * Beats Stylish IMO because it works everywhere
  * Open source [https://github.com/darkreader/darkreader](https://github.com/darkreader/darkreader)
* Linkclump extension - [https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj](https://chrome.google.com/webstore/detail/linkclump/lfpjkncokllnfokkgpkobnkbkmelfefj)
  * Use a hotkey \(configurable\) to drag a box and open all links in said box
  * Smart and configurable
  * Open source [https://github.com/benblack86/linkclump](https://github.com/benblack86/linkclump)
* itsycal - [https://www.mowglii.com/itsycal/](https://www.mowglii.com/itsycal/)
  * Menu bar calendar
  * Can be used to replace system clock \(I did!\)
  * Just handy in general
* LuLu - [https://objective-see.com/products/lulu.html](https://objective-see.com/products/lulu.html)
  * Free and open source version of Little Snitch, essentially
  * Notifies you on an app attempting a connection to the internet
    * Tells you what it’s connecting to, so you can allow updates but not analytics
  * Allows permanent or temporary white and black listing

### Hotkeys

I’m never surprised when someone doesn’t know some hotkeys. Here’s some hotkeys Legend `⌘` = the command key `⇧` = the shift key `⌥` = alt/option `^` - the control key

**Screenshots**

* `⌘ + ^ + 4` - Take a screenshot of a selectable section of the screen and save the file on your desktop
  * Add in `⇧ Shift` and it is copied to clipboard and not saved to desktop
* `⌘ + ^ + 3` - Take a screenshot of ALL displays \(each monitor saved as a different file\)
  * Add in `⇧ Shift` and it is copied to clipboard and not saved to desktop
* * `⌘ + ^ + 5` - Advanced screenshotting. Too bulky for my tastes

**General**

* `⌘ + ,` - This goes to app settings in MOST apps
* `⌘ + ;` - A lot of JetBrainz apps use this as well \(DataGrip etc\)
* `⌘ + W` OR `Middle click` a tab will close it in most apps \(Finder, Chrome, etc\)
  * `⌘ + W` will close the current window if there are not multiple tabs
* `⌘ + ⇧ + ]` OR  `⌘ + ⌥ + Right` - cycle to the next tab
* `⌘ + ⇧ + [` OR  `⌘ + ⌥ + Left`- cycle to the previous tab\
* `⌘ + ⇧ + .` - show/hide hidden files in finder
* `⌘ + Up` - go “up” a directory in finder

**Chrome \(and most other browsers?\)**

* `⌘ + ⌥ + I` - open the developer tools
* `⌘ + T` - new tab
* `⌘ + ⇧ + T` - reopen closed tab \(repeatable\)
* `⌘ + W` - new window
* `⌘ + ⇧ + W` - reopen closed window \(repeatable\)
* `⌘ + L` - highlight the URL bar
* `⌘ + Up` - top of page
* `⌘ + Down` - bottom of page
* `⌘ + Back` - go back a page
* `⌘ + Forward` - go forward a page
* `⌘ + ⇧ + ]` - cycle to the next tab
* `⌘ + ⇧ + [` - cycle to the previous tab

**Sublime, VSC, most IDEs**

> I personally use the Atom keymap in VSC, so some of these hotkeys might be different from what you use 🤷‍♂️ That said, most IDEs provide a printable cheat sheet, here’s VSC’s: [https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf)
>
> * `^ + M` - jump to matching bracket
> * `⌘ + ⇧ + D` - duplicate current line 
> * `⌘ + ⇧ + L` - place cursor at end of line for every line selected
> * `⌥ + Up/Down` OR `⌘ + ^ + Up/Down` - move selection up/down \(single or multi-line\)
> * `⌘ + Shift + F` - search across all files in project
> * `^ + Backtick` - Open integrated terminal
> * `⌘ + \` - Show/hide side bar \(I think this is editor split by default\)

### Developer

#### Sublime - [https://www.sublimetext.com/](https://www.sublimetext.com/)

Even if you have a favorite IDE, Sublime is suuuuuuper fast for quick viewing of big JSON files etc. Things you wouldn’t have in a project and want something more than nano or textedit to work with `JSON Pretty` extension is incredibly handy and very fast

#### Visual Studio Code

> If you don’t use VSC, skip this section.
>
> **settings.json**
>
> settings.json is incredibly powerful. A lot of settings can only be set via editing this file. To find it, hit `⌘+⇧ Shift+P` to bring up the command palette and type in “settings” and select “Preferences: Open Settings \(JSON\)” Intellisense works wonders in the settings file, just start typing the name of an extension or whatever and it’ll start listing possible properties. When you select one, it usually automatically shows possible values for that setting. settings.json supports JS comments `//` and `/* */` Here’s some fun excerpts from my settings.json
>
> ```javascript
>     // set a custom title for the VSC window
>   "window.title": "${activeEditorShort}${separator}${rootName}${separator}${activeEditorMedium}",
>   // multi cursor key is something else by default
>     "editor.multiCursorModifier": "ctrlCmd",
>   // if you paste in copied code, format it to current editor formatting settings
>   // this works with eslint as well
>   "editor.formatOnPaste": true,
>   // telemetry off, always
>   "telemetry.enableCrashReporter": false,
>   "telemetry.enableTelemetry": false,
>   "gitlens.advanced.telemetry.enabled": false,
>   // I've found these optimizations to not be worth the loss of extensions etc
>   "editor.largeFileOptimizations": false,
>   // if you have enough indentions, this setting keeps things manageable
>     "editor.wrappingIndent": "indent",
>   // renders some nice unobtrusive lines to show indent level
>   "editor.renderIndentGuides": true,
>   // Scrollback lines in the built in terminal, absolutely essential
>   "terminal.integrated.scrollback": 10000,
>   // If you work with someone on Windows or who uses 8 space tabs or something...
>   "editor.detectIndentation": false,
>   // I personally hate right click pasting in terminals
>   "terminal.integrated.rightClickBehavior": "selectWord",
>   // Nice little breadcrumbs that are built in
>   "breadcrumbs.filePath": "on",
>   "breadcrumbs.enabled": true,
>   "breadcrumbs.icons": true,
> ```

**Extensions**

I’ve curated a decent array of extensions in a few years of using VSC. Some of these come with VSC by default, but I don’t remember which ones so I’ll point ‘em out anyway.

* GitLens
  * Just an absolutely amazing all in one Git extension
    * Inline git blame, anyone?
    * All kinds of diffing
    * Seriously it could replace all the other git extensions
* JSON Tools
  * Minify or prettify JSON. That’s it. That’s all.
* LintLens
  * Inline and hover info on eslint rules
* Monokai Pro Themes
  * Best themes I’ve personally found
  * Is a “paid” thing but just has a nag popup on first open of VSC to close
* npm intellisense
  * Auto-completion of package names etc from `npm install`’d packages
    * works with require\(\) and import syntax
  * I recommend adding `”npm-intellisense.scanDevDependencies”: true` to your settings.json
* Quokka.js
  * Does some cool things with running JS live as you edit
  * Can be handy while hacking together scripts
  * Free version is somewhat limited, but not enough I’ve even considered paying
* Rainbow CSV
  * Text in CSVs opened in VSC is color coded by column
* Select Line Status Bar
  * Shows number of selected lines in status bar
* TODO Highlight
  * Highlight things like `TODO` `NOTE` `FIXME` etc
  * Can add any arbitrary string to highlight
  * Super customizable
  * Can’t live without
* Todo Tree
  * Adds a tree view of TODO etc comments
  * As customizable as TODO Highlights
* Bracket Pair Colorizer
  * Colors brackets different colors to make it easy to identify matching brackets.
  * Has options to show colorized lines indicating scope as well
  * There is a Bracket Pair Colorizer 2 that’s supposed to be faster but I can’t get it to work
  * On large files takes about a second to colorize everything, so some people might not love it
  * Here’s my settings that work quite well for me

    ```javascript
    "bracketPairColorizer.forceUniqueOpeningColor": true,
      "bracketPairColorizer.activeScopeCSS": [
          "borderStyle : solid",
          "borderWidth : 1px",
          "borderColor : {color}",
          "opacity : .7"
      ],
    "bracketPairColorizer.consecutivePairColors": [
      "()", "[]", "{}",
      [ "</", ">" ],
      [ "<", "/>" ],
      "<>",
      [
          "Gold",
          "Orchid",
          "LightSkyBlue",
          "Aqua",
          "Coral",
          "Chartreuse",
          "OliveDrab",
          "Orange",
          "White"
      ],
      "Red"
    ],
    "bracketPairColorizer.colorMode": "Consecutive",
    "bracketPairColorizer.highlightActiveScope": true,
    "editor.matchBrackets": "never",
    "bracketPairColorizer.showBracketsInGutter": true,
    "bracketPairColorizer.showVerticalScopeLine": true,
    "bracketPairColorizer.scopeLineCSS": [
      "borderStyle : solid",
      "borderWidth : 1px",
      "borderColor : {color}; opacity: 0.5"
    ],
    "bracketPairColorizer.showHorizontalScopeLine": false,
    "bracketPairColorizer.forceIterationColorCycle": true,
    ```

**iTerm2 - https://iterm2.com/**

We all know this one, but how can we make it better?

> !!! I assume you’re using zsh instead of bash. If using bash, there’s probably still ways to do all this stuff, you’ll just have to find them on your own.
>
> * zsh/iterm integration -  [https://iterm2.com/documentation-shell-integration.html](https://iterm2.com/documentation-shell-integration.html)
>   * Adds in some nice quality of life things, especially for remote hosts
>   * Totally optional, I honestly mostly don’t use the features, just command autocomplete from history on remote hosts
> * Hotkey window - [https://iterm2.com/documentation-hotkey.html](https://iterm2.com/documentation-hotkey.html)
>   * ESSENTIAL. SET THIS UP. It will literally change your life
> * Profiles 
>   * Can be setup to automatically connect to SSH, run commands, etc on open
>   * Can be given hotkeys
>   * Can be auto-switched based on all kinds of stuff; [https://iterm2.com/documentation-automatic-profile-switching.html](https://iterm2.com/documentation-automatic-profile-switching.html)
>     * This is especially cool if you add a Badge to the profile: [https://iterm2.com/documentation-badges.html](https://iterm2.com/documentation-badges.html)
>   * Under Advanced -&gt; Triggers you can do a lot with auto entry of passwords or key presses based on regex parsing of the terminal \(tip: `\n` acts as hitting ENTER\)
>   * Badges
>     * See above docs, they’re great and can be quite powerful
>   * Word jump \(use option + back/forward to jump between words like your IDE\): [https://coderwall.com/p/h6yfda/use-and-to-jump-forwards-backwards-words-in-iterm-2-on-os-x](https://coderwall.com/p/h6yfda/use-and-to-jump-forwards-backwards-words-in-iterm-2-on-os-x)

#### Shell

**nano**

I use `nano` over `vi` because I prefer not to torture myself. If you prefer `vi` go ahead and skip this section.

First thing to do is update the nano version on your mac

* Run `brew install nano`
* Grab the path brew installed to from the install messages. If you don’t see it, run `brew info nano` 
  * As of right now, this path is `/usr/local/Cellar/nano/4.9.3` - newer versions, just change the path
* add an alias to your bashrc/zshrc `alias nano=/usr/local/Cellar/nano/4.9.3/bin/nano`
* Reload your terminal and now you’re using the new nano when you run `nano`

Syntax highlighting in nano is nice

* Just follow installation instructions here - [https://github.com/scopatz/nanorc](https://github.com/scopatz/nanorc)
* run `echo "include ~/.nano/*.nanorc" >> ~/.nanorc` 
* Now you have syntax highlighting

**git**

Handy aliases from my `~/.gitconfig` - also check out [https://github.com/gitalias/gitalias](https://github.com/gitalias/gitalias)

```text
[alias]
    ls = log --pretty=format:"%C(yellow)%h%Cred%d\\ %Creset%s%Cblue\\ [%cn]" --decorate
    rh1 = reset HEAD^ --hard
    ac = !git add . && git commit -am
    undo-commit = reset --soft HEAD~1
    new = checkout -b
    mergetest = "!f(){ git merge --no-commit --no-ff \"$1\"; git merge --abort; echo \"Merge aborted\"; };f "
```

* `git ls` will show a nice compact list view of commits in current repo
* `git rh1` is scary and I never use it, but could be useful to some
* `git ac "commit message"` will add all untracked files in current repo and add a commit message
  * you can add additional `-m “next line"` to add more lines, but they will have an extra linebreak
  * Alternatively, commit messages respect `\n` for new lines so you can do `git ac “Commit title\nfirst additional line\nsecond additional line"`
* `git undo-commit` is also scary and I never use it, but you might like it
* `git new branch_name` creates a new branch with branch\_name IE `git new feature/PSI-9999`
* `git mergetest` allows you to dry run a merge attempt to see if there are any conflicts

**CLI tools**

* goto - [https://github.com/iridakos/goto](https://github.com/iridakos/goto) - `brew install goto`
  * setup directory aliases and quickly jump to them `goto work` `goto aem63` etc
  * I mostly just like typing `goto work`
* n - [https://github.com/tj/n](https://github.com/tj/n) - `brew install n`
  * nodejs version manager
  * commands like `n 12` to switch to nodejs 12 or  `n run 8 index.js`  to run a file with nodejs 8
  * I just find it a little friendlier than `nvm`
* pyenv - [https://github.com/pyenv/pyenv](https://github.com/pyenv/pyenv) - `brew install pyenv`
  * Don’t use much python, but every time I do versions are an issue. This is a MUST HAVE
    * Seriously you’ll eventually find a tool or something that needs python 3.6 and you have 2.7 or vice versa
* htop - [https://hisham.hm/htop/](https://hisham.hm/htop/) - `brew install htop`
  * Like `top` but way better
    * Colorful, customizable, mouse support \(in iTerm\)
* tldr - [https://github.com/tldr-pages/tldr](https://github.com/tldr-pages/tldr) - `brew install tldr`
  * Like man pages but for people. Shows usage for whatever you search
  * `tldr n` - shows a few ways you’re likely to use n
  * I honestly haven’t used `man` or googled CLI usage very much since I started using this
* 
**zsh**

First, I highly recommend `oh-my-zsh` - [https://ohmyz.sh/](https://ohmyz.sh/)

> Oh My Zsh is a delightful, open source, community-driven framework for managing your Zsh configuration. It comes bundled with thousands of helpful functions, helpers, plugins, themes, etc

If you prefer not to use oh-my-zsh, you can probably still get most of the same functionality, but some things from my `~/.zshrc` are going to require tweaking as they rely on it.

One thing not mentioned in my zshrc is zsh-manydots-magic - [https://github.com/knu/zsh-manydots-magic](https://github.com/knu/zsh-manydots-magic) - this just does intelligent parsing and expansion of dot usage in commands like `cd ...` which is the equivalent of `cd ../..` - it can follow a lot more dots than that, too. Very handy.

Fun bits from my `~/.zshrc`

```text
# Wonderful and powerful zsh theme - https://github.com/romkatv/powerlevel10k
ZSH_THEME="powerlevel10k/powerlevel10k"

# https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins - list & docs
# there are MANY more options, use to your liking
plugins=(zsh-wakatime docker docker-compose extract gitignore node osx sudo urltools)

######################
# ALIASES
#####################
# Alias guide for ZSH
# https://blog.lftechnology.com/command-line-productivity-with-zsh-aliases-28b7cebfdff9
# acs() {
#     apt-cache search $1 | grep $2
# } // acs firstthing secondthing
# alias -s [file-extension]=[name-of-app]
# alias -s json=sublime // always open .json in sublime when just typing file name 

# use "subl" to open sublime from terminal
alias subl=/usr/local/bin/subl
# random bastard operator from hell lines, needs telnet - "brew install telnet"
alias bofhexcuse='telnet towel.blinkenlights.nl 666'
# just in case
alias cd..='cd ..'
# a terminal clock - "brew install tty-clock"
alias termclock='tty-clock -scxtn -C 3'
# Use newer nano than macOS provides - "brew install nano"
alias nano=/usr/local/Cellar/nano/4.9.3/bin/nano
# default rm to interactive
alias rm='rm -i'

######################
# Misc
######################
# goto CLI tool
source ~/.oh-my-zsh/custom/functions/goto.sh
# jenv
PATH=$HOME/bin:/usr/local/bin:$HOME/.jenv/bin:$HOME/Developer/apache-maven-3.6.1/bin:$PATH
eval "$(jenv init -)"
# pyenv
if command -v pyenv 1>/dev/null 2>&1; then
  eval "$(pyenv init -)"
fi

###############################
# Bottom things
###############################
# zsh/iTerm shell integration - leave near bottom
source ~/.iterm2_shell_integration.zsh
# The following lines were added by compinstall
zstyle ':completion:*' completer _complete _ignored _approximate
zstyle :compinstall filename '/Users/dslaught/.zshrc'
autoload -Uz compinit
compinit
# End of lines added by compinstall
# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
# Source goto
[[ -s "/usr/local/share/goto.sh" ]] && source /usr/local/share/goto.sh
```


## GitHub Tada

## Installation

- Double click `GitHub Tada.dmg` installer, move `GitHub Tada` to Applications
- Create Automator service, add `Launch Application`, select `GitHub Tada`
- Define keyboard shortcut for invoke `GitHub Tada`, open `System Preferences > Keyboard > Shortcuts` set `Control + Command + C`

## Usage

- Press `Control + Command +  C`
- Press `Command + V`

## Development

```bash
npm install
webpack --watch
eletron .
```

## Create installer

```bash
bash release-mac.sh
```
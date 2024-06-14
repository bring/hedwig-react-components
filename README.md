# ⚠️ DEPRECATED

The new Hedwig Design System is now stable and can be found [here](https://github.com/bring/hedwig-design-system). This repository will be minimally maintained.

# Hedwig React Components

## Development

### Clone repo

```bash
git clone https://github.com/bring/hedwig-react-components.git
```

### Add Font Awesome Licence key to your environment

You need to add an environment variable with your authToken from Font Awesome. For Posten and Bring developers, contact Hedwig contributors. Otherwise, you can [get a licence](https://fontawesome.com/plans)

Add the token to `~/.bashrc`, `~/.zshrc` or equivalent:

```bash
export NPM_TOKEN=[FONT-AWESOME-LICENCE-KEY]
```

[FONT-AWESOME-LICENCE-KEY] needs to be replaced by the real token.

### Adding new packages to hedwig-react-components

To create a new package in hedwig-react-components run the following command
```
lerna create <package-name>
```

### Adding a package to another

Use 'lerna add' to add an external or internal package to another

Add package-1 to package-2
```
lerna add package-1 --scope package-2
```

Add package-3 to all packages
```
lerna add package-3
```

### Publishing
We use lerna to publish our packages

List all packages that has changes since last release
```
lerna changed
```

To bump version numbers and publish packages that have changed since last release
```
lerna publish
```

## Available NPM modules

- [Accordion](https://www.npmjs.com/package/@posten-hedwig/accordion)
- [Badge](https://www.npmjs.com/package/@posten-hedwig/badge)
- [Base](https://www.npmjs.com/package/@posten-hedwig/base)
- [Block](https://www.npmjs.com/package/@posten-hedwig/block)
- [Button](https://www.npmjs.com/package/@posten-hedwig/button)
- [Container](https://www.npmjs.com/package/@posten-hedwig/container)
- [Core](https://www.npmjs.com/package/@posten-hedwig/core)
- [Flex](https://www.npmjs.com/package/@posten-hedwig/flex)
- [Footer](https://www.npmjs.com/package/@posten-hedwig/footer)
- [Grid](https://www.npmjs.com/package/@posten-hedwig/grid)
- [Icon](https://www.npmjs.com/package/@posten-hedwig/icon)
- [Link](https://www.npmjs.com/package/@posten-hedwig/link)
- [Linklist](https://www.npmjs.com/package/@posten-hedwig/linklist)
- [Logo](https://www.npmjs.com/package/@posten-hedwig/logo)
- [Navbar](https://www.npmjs.com/package/@posten-hedwig/navbar)
- [Slimfooter](https://www.npmjs.com/package/@posten-hedwig/slimfooter)
- [Typography](https://www.npmjs.com/package/@posten-hedwig/typography)

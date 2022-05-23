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
´´´
lerna create <package-name>
´´´

### Adding a package to another

Use 'lerna add' to add an external or internal package to another

Add package-1 to package-2
´´´
lerna add package-1 --scope package-2
´´´

Add package-3 to all packages
´´´
lerna add package-3
´´´

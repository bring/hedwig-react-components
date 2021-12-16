# hedwig-react-components


## Development

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
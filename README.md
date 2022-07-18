# OpenFeature Documentation

This repository provides the documentation for OpenFeature; including the SDK, flagd and the operator.

### Documentation Structure

We are following a slightly modified version of the [diataxis framework](https://diataxis.fr/) for our documentation:

- Docs: Reference material for using OpenFeature e.g. the specific commands and code
- Getting Started: Guide on using OpenFeature 
- Tutorials: Use Cases and specific implementations 
- Explanations: Extensive explanations of the different components 

## Contributing

We welcome your contribution to the OpenFeature documentation. Please make sure to read our [contributor guidelines](https://github.com/open-feature/.github/blob/main/CONTRIBUTING.md)

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
Please refer to the docusaurus documentation to learn how to format the documentation.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

# [Utupress Design Blocks](https://www.utupress.com/blocks) &nbsp; [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Get%20over%20170%20free%20design%20blocks%20based%20on%20Bootstrap%204&url=https://www.utupress.com/blocks&via=utupress&hashtags=bootstrap,design,templates,blocks,developers) 

[![Price](https://img.shields.io/badge/price-FREE-0098f7.svg)](https://github.com/utupress/design-blocks/blob/master/LICENSE)
[![License: FOWDL v1.0](https://img.shields.io/badge/license-FOWDL-blue.svg)](https://github.com/utupress/design-blocks/blob/master/LICENSE)

Over 170 responsive design blocks ready to be used in your web or mobile apps. All blocks are based on the Bootstrap Library, and they are the building blocks for beautiful websites.

**Discuss it on [Product Hunt](https://www.producthunt.com/posts/utupress-design-blocks-2-2) 🦄**

<p><a href="https://www.utupress.com/design-blocks/webpage-builder">Design Blocks Builder »</a></p>
<p><a href="https://www.utupress.com/wysiwyg-editor">WYSIWYG HTML Editor</a> · <a href="https://www.utupress.com/pages">Pages</a> · <a href="https://www.utupress.com/blog">Blog</a> · <a href="https://github.com/utupress/design-blocks/archive/master.zip">Download</a></p>

![Design Blocks](https://raw.githubusercontent.com/utupress/design-blocks/master/design-blocks.jpg)

## Table of contents

- [Quick start](#quick-start)
- [Implementations](#implementations)
- [What's included?](#whats-included)
- [Dependencies](#dependencies)
- [Categories](#categories)
- [Browser support](#browser-support)
- [Community](#community)
- [Bugs and feature requests](#bugs-and-feature-requests)
- [Contributing guidelines](#contributing-guidelines)
- [Contributors](#contributors)
- [Copyright and license](#copyright-and-license)


## Quick start

1. **Download Utupress Design Blocks.** There are several ways to start using the Utupress Design Blocks depending on how you prefer:

- [Use the builder](https://www.utupress.com/blocks/webpage-builder)
- [Download the latest release](https://github.com/utupress/blocks/blob/master/utupress-design-blocks.zip?raw=true) and then read the [What's included](#whats-included) section below.
- Clone the repo and run it.
  ```bash
  git clone https://github.com/utupress/design-blocks.git
  cd design-blocks
  npm install
  npm run start
  ```

2. **Design Blocks Skeleton.** You can use the following code layout as a starting point.

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <title>Utupress Design Blocks - Skeleton</title>
       <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0">
       <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb" crossorigin="anonymous">
       <link href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i" rel="stylesheet">
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
       <link type="text/css" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/utupress-design-blocks/2.0.1/css/utupress_blocks.min.css">
     </head>

     <body>
         <!-- Insert HTML for contents. -->
     </body>
   </html>    
   ```

3. **Add design blocks.** Once you have the Utupress Design Blocks basic HTML structure in place, start browsing the design blocks that you want to use and copy/paste the HTML for them.



## What's included

Within the download archive you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
design-blocks/
├── dist/
│   ├── css/
│   │   ├── utupress_blocks.css
│   │   └── utupress_blocks.min.css
│   └── imgs/
│   │── call_to_action.html
│   │── contacts.html
│   │── contents.html
│   │── features.html
│   │── footers.html
│   │── forms.html
│   │── headers.html
│   │── index.html
│   │── pricings.html
│   │── teams.html
│   └── testimonials.html
├── assets/
├── screenshots/
└── src/
```

We provide compiled CSS (`utupress_blocks.css`), as well as compiled and minified CSS (`utupress_blocks.min.css`). Also, in the downloaded archive you will find useful images and PSD files that you can use to create new backgrounds. In the `screenshots` folder, there are the screenshots of all design blocks.



## Dependencies

- **Bootstrap**. Utupress Design Blocks is built on Bootstrap 4 library and fully supports it. It uses the Javascript files only for the header design blocks, so if you don't need them, we recommend not to include the Bootstrap JS files in order to reduce your bundle size.

- **Font Awesome**. We're using the amazing Font Awesome library for the social network icons.

- **Google Fonts**. By default, the Design Blocks toolkit is built using the Roboto font, however that can easily be changed to other fonts.


## Browser Support

At the moment, we aim to support all major web browsers. Any issue in the browsers listed below should be reported as a bug:

- Internet Explorer 10+
- Microsoft Edge 14+
- Safari 6+
- Firefox (Current - 1) and Current versions
- Chrome (Current - 1) and Current versions
- Opera (Current - 1) and Current versions
- Safari iOS 7.0+
- Android 6.0+

(Current - 1) and Current means that we support the current stable version of the browser and the version that precedes it.



## Bugs and feature requests

Have a bug or a feature request? Please first read the issue guidelines and search for existing and closed issues. If your problem or idea is not addressed yet, [please open a new issue](https://github.com/utupress/blocks/issues/new).



## Community

Get updates on Utupress Design Blocks' development and chat with the project maintainers and community members:

- Follow [@utupress on Twitter](https://twitter.com/utupress)
- Read and subscribe to [The Official Utupress Blog](https://www.utupress.com/blog)
- Check the [Official Website](https://www.utupress.com/blocks)
- Join us [on Facebook](https://www.facebook.com/utupress/)
- [Google+](https://plus.google.com/+utupress/)
- [Pinterest](https://pinterest.com/utupress/)



## Contributing guidelines

All contributions are more than welcomed. Contributions may close an issue, fix a bug (reported or not reported), add new design blocks, improve the existing code, add new feature, and so on. In the interest of fostering an open and welcoming environment, we as contributors and maintainers pledge to making participation in our project and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation. [Read the full Code of Conduct](https://github.com/utupress/blocks/blob/dev/CODE_OF_CONDUCT.md).

The `dev` branch is the default and base branch for the project. It is used for development and all Pull Requests should go there. Please make sure not to commit the `dist` folder in the `dev` branch.



## Copyright and License

Code and documentation copyright 2018 [Utupress Labs](https://www.utupress.com/). Code released under the [Utupress Open Web Design License](https://github.com/utupress/blocks/blob/master/LICENSE).

Graphics license:
  - shapes: free to use by [Creative Tim](https://www.creative-tim.com/)
  - photos: free under the creative license from [Pexels](https://www.pexels.com/photo-license/)
  - illustrations: free under the creative license from [Undraw](https://undraw.co/license)
  - icons: free under MIT license [FeatherIcons](https://feathericons.com/)
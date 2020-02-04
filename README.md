# Profile-Generator

## Table of contents

- [General info](#general-info)
- [Technologies](#Technologies)
- [Deployment](#Deployment)
- [Summary](#Summary)

## General Info

This project creates a command-line application that dynamically generates a PDF profile from a GitHub username.

GitHub URL: https://github.com/ddhoang21/Profile-Generator

![profile-generator](https://user-images.githubusercontent.com/55167673/73417497-1bc75a80-42cd-11ea-9913-bb35f1a37d25.gif)

## Technologies

Project is created with :

- [Node.js](https://nodejs.org/en/)
- [JavaScript](https://www.javascript.com/)

## Deployment

- Copy the repository
- In your terminal, cd to the folder directory
- Install axios, inquirer and html-pdf with the command:

```sh
npm install
```
- Start the application with the following command:

```sh
node index.js
```

## Summary

The user will be prompted for their GitHub username and for their favorite color, which will be used as the background color for cards.

The PDF is populated with the following:

- Profile image
- User name
- Links to the following:
  - User location via Google Maps
  - User GitHub profile
  - User blog
- User bio
- Number of public repositories
- Number of followers
- Number of GitHub stars
- Number of users following

## Author

- Duc-Hoang Do

## License

The MIT License (MIT)

Copyright (c) 2020

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

*The Software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the Software.*
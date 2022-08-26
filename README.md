# Stacey Rozich's Website

### This app is a portfolio website I built for the artist Stacey Rozich. It's a Jamstack site built in GatsbyJS, WordPress and is hosted on AWS. The design of the website was created by designer Andrew Nedimeyer (Amazon) and was recreated by myself pixel by pixel.

[View website here!](https://www.staceyrozich.com/)

#### App description:

1. The application allows the artist to manage their content on the backend in WordPress. When new content is added a webhook is triggered and the front end, GatsbyJS, will automatically rebuild and redeploy.

2. When a user clicks on an image it will open a lightbox that will show users the original full res image and navigate between images. I created the lightbox myself which was a great learning experience.

#### Challenges faced:

1.  Overcame slow page speed by implementing the modern WebP image format, lazy
    loading, using srcset / size to serve the proper image size, all while
    maintaining high image quality.

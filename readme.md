# My Portfolio site

This is my personal porfolio website hosting some of the projects I create by myself. Currently any of the links you click on will take to you a new site in another tab. This site was created using Gatsby and changing some designs from my old HTML website.
![alt text](../Portfolio/static/documents/introDemo.png)

I have one file that has some small css for the header in style/header.css but most of the styling is done in styled components. I found that easier to understand and most of the components were pretty small anyways.

I have my headshot image as a gatsby image as that was something really cool I learned about. Eventually I will change all of the photos to gatsby images to help even furthur with slow mobile devices. But when I run the lighthouse audit using the chrome dev tools, I get all 100's so I did not see it necessary at this point.

![alt text](../Portfolio/static/documents/projectDemo.png)

Near the bottom of the page is my projects section. Each project is made with react-modal. You can see the image and name of the project as well as a Read more button. When you click read more, the modal appears with information on my project such as a description and tech used list. It also holds links to both source code and the live app.

![alt text](../Portfolio/static/documents/modalDemo.png)


> The site is live at gabesharpton.com but if you clone the repo and run 
>
>       `yarn install`
>
>       `gatsby develop`
>
> You will get the app avaliable at localhost: 8000


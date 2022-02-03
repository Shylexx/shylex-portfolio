---
title: 'NextJS Portfolio'
date: '2022-01-23'
thumbnail: 'portfolio.jpg'
---

I grew bored of my old, basic portfolio site, using Bootstrap as my framework, and so I elected to finally begin to learn how to create web apps via Node JS. I have created this website as its replacement using Next.JS (and therefore React), Chakra UI and Framer Motion to create an aesthetically pleasing front end. The project has served as an excellent introduction to building my own web apps, as I have experimented with many different techniques and features as well as understanding better the advantages of creating JavaScript based sites rendered by the frameworks, rather than the incredibly static basic HTML and CSS design method.  
&nbsp;  
The Dev log page on this site is parsed through markdown files, and some meta data inside a devlog folder in the root. **Next.JS** loads this through static props and routing and creates these pages as needed. This makes creating new blog posts very easy, as I simply create a new markdown file and add it to the devlog folder at the root. Creating a system for adding new posts easily with as little code as possible is very useful and makes writing posts much more focused on the content than making the post work. Static generation was much more useful here, as blog posts are not constantly changed and updated.  
&nbsp;  
I spent some hours looking into making API requests through my stack. I intended initially to create some kind of Spotify recently played segment to add to the homepage, and perhaps I still will, but I will dedicate more time into exploring OAuth and generating tokens before I do so. Additionally, I would like to improve the parsing of images in both these markdown files and also as an element of metadata, as the thumbnail images are currently statically imported into the dev log page. This is the only thing preventing the blog system from being code free.  
&nbsp;  
The next step is absolutely to both try a different frontend framework, perhaps Angular or Vue, to improve my versatility and get used to the similarities and then differences. Similarly, I would like to attempt to use Firebase, or similar, to start interacting with a back end. Learning the basics of front end through this have been fun, and certainly useful, but the ability to interact with data and display it dynamically is a key interest I hold in this level of web development, and so I will be sure to investigate how I might do this. I am sure I will include details on what I find in future posts.
  
### 🪐 Planets MVC Recap 🪐

Friday is here but first let's do our Morning Recap 🤸‍♂️🤸‍♂🤸‍♂

Today's Recap is going to be all about our Solar System Planets 🚀

<img width="500" height="500" src="https://i.pinimg.com/originals/82/73/1c/82731cd69bc7c8ad339d88eabed303f3.gif"/>

## Instructions

### Clone the Repo and Install NPM Packages

Hint: you have already the package-lock.json. So, after cloning the lab, you should only need to do 'npm install' to download the npm packages that are needed 😉

<br>

### 1st Interation: Create a Schema that suits your Planet's Object

After having your project configured, check your '/utils/planets.js'. Everytime you click on the 'Create All Planets' Button on your Homepage, this will grab the Array of Objects that you see on this file and iterate over each one of the elements. With each interation, a Solar System planet (and also the Sun 🌞) should be created inside your MongoDB Database. 

The problem here is that we don't have yet our Schema ready to receive the information of each object 😭

<b>It's up to you to edit the planetSchema with all the fields each Solar System Planet Object have in common</b> 😉

Hint: How can you know that you have the Planets inside your DB? MongoDB Compass will be your bff 🚀

Hint 2: From time to time, clicking the Homepage Delete All Planets Button can be a good idea, if you need to do a reset on your Database

<br>

### 2nd Interation: Display all the planets in 'list-planets.hbs'

8 Planets + the Sun inside your DB... are you Matthew McConaughey? Because that's some Interstellar happening here! 

Last thing that we're going to do is display all the planets inside our Web App. To do that, check your app.js. Here you'll find some basic Express/HBS/Mongoose configuration. 

You should work inside the GET '/list-planets' Express Route. Inside it, you should return all the Planets that you have inside your DB and render them with your 'list-planets.hbs' file. 

After that, you should edit your 'list-planets.hbs' to have all the data in your HTML... maybe start with a {{#each}} {{/each}} loop? 😉

Hint: Remember that Handlebars only reads Objects, not Arrays!


### Good Luck! 🎉🎉🎉

<br>

# Functional Programming

The concepts of functional programming have significantly shaped Computer Science from the early days.

Apply some "FP" concepts to the MVC Blog!

We'll make an "admin" page, which will show some stats on how authors on the blog are doing. In the end, it will looks [something like this](https://cf-mvc-blog--class07.aerobatic.io/admin.html).

Today there are many TODO items, but they are (mostly) smaller bites.

## TODOs: MVP
1. Start by looking over what's new in the codebase. There is now an admin.html page! There are some `// DONE` comments! There are some new functions in articleView.js. Practice your code-reading skills.
1. Let's make sure each one of our scripts are properly enclosed. Wrap the contents of article.js and articleView.js in an IIFE. Set up your IIFE so it receives a parameter to which it can attach behavior. For now, you might want to use `window` to export your objects or constructor functions.
1. For both `index.html` and `admin.html`, we'll want access to the `Article.all` data...but we'll have different view functions to set up each of those pages. Modify the `fetchAll` function so that it takes a `next` parameter: a function to call when it's work is done.
1. Now set up both the index page and the admin page to call `fetchAll` in a way that properly triggers the appropriate page setup methods.
1. Leverage Handlebars to make a small template for each list item in the Author Stats section.
1. Use chained map/reduce calls to transform the data into what you need it to be
1. Finally, fill in author stats, using your FP-style data methods!


# TODOs: Stretch Goals
- What statistical analysis would be of interest to you with this data set? Code it up!




Now, go find those `TODO` items in the codebase, and tackle each one of them.

See previous instructions, if you'd like to review the steps.

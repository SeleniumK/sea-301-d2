# Assignment for Class 5 - Article Writer

Now that you have a blog where your articles can be read, let's create a nice interface for writing new articles.

Since the blog is powered by the raw data file, we need a way to create articles, and export the data for insertion into that file.

We'll use an HTML form to let authors create new posts in Markdown. We'll show them a live preview as they write, and even throw in syntax highlighting for blocks of code. We'll provide a JSON version of the blog post, which can be copy/pasted into the raw data source file, so the new article will appear on the main blog page.

This will all happen on a special html page, not linked from the main page.

## This is a class-workshop assignment
1. Look over the existing code, to see what's new, and how it is set up.
1. An instructor will live-code a section of the app.
  - Watch and follow the concepts.
  - Don't try to keep up.
- After each section, you'll have a chance to implement a solution yourself. Find the starter code in the `lecture/` folder.
- Try things out, and teach each other about what unique approaches you took in your own code base.
- Submit your work, and any personalizations you'd like to include.

## User Stories: MVP
 - As an author, I want a secret URL (new.html) where I can go write articles, so that blog visitors don't think they can create posts.
 - As an author, I want a form fields for all the article properties, so that I can customize each aspect of my article.
 - As an author, I want to write in Markdown, so that I can easily control formatting.
 - As an author, I want an export of the final article, so that I can paste it into blogArticles.js to publish it.

## User Stories: Stretch Goals
 - As an author, I want a live preview of how my post looks, so that I know if I screw up the markdown.
 - As an author, I want code samples to have syntax highlighting, so that my readers see code as it should appear.

## Technical Requirements and Grading Rubric
 - Ensure your code passes ESLint.
 - Continue to use mobile-first development practices.
 - Verify that your exported data can be copy/pasted into `blogArticles.js` to be published.
 - Integrate libraries to help with markdown and syntax highlighting, as appropriate.
 - Use the same template code to preview the draft article, as appropriate.
 - Bonus points if the new article page is responsive!

## Helpful Resources
 - HTML -> Markdown conversion: https://github.com/chjj/marked
 - Syntax highlighting: https://github.com/isagalaev/highlight.js

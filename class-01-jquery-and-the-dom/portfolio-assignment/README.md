# Your professional online presence

The portfolio site that you create will highlight your projects and your interests, and showcase your skills to potential employers or clients.

You will create, from scratch, a static portfolio site (no "backend server" code required), to represent your personal online presence.

Some hints to get going:

- Start a fresh new repository for this project on GitHub.
- This app will be structured very similarly to the blog code you worked with in your pair assignment.
- Start with a **rough** pen & paper "wireframe" sketch of what you want your portfolio site to look like.
- Work through as many of the user stories as you can, but always submit what you have by the due date. Don't let "if only..." ideas keep you from turning something in!
- Add the [.eslintrc](https://github.com/codefellows/sea-301d1/blob/master/.eslintrc) config file to the root of your repo, so we are all on using the same linter settings.

## User Stories: Minimum Viable Product (MVP)
Let these user stories guide your development:
 1. As a developer, I want my site to use valid and semantic markup, so that employers will love me.
 - As the creator, I want the page to link to my social and GitHub pages, so that visitors can follow me, and I can build my audience.
 - As a developer, I want portfolio items displayed with a repeatable template, so that I can reuse it, and abstract out the details for individual projects.

## User Stories: Stretch Goals
1. As a visitor, I want the site to look reasonable, so that I can read it on any device.
1. As a visitor, I want the portfolio to show the newest projects on top so that I can easily see the developers recent work.
- As a visitor, I want relative timestamps on projects to give me a idea of how many days ago something was created.


## Technical Requirements and Grading Rubric

  - Use good Object Oriented code: Create a constructor function for projects.
  - Leave as little in the `window` (global) namespace as possible: attach functions to objects, etc.
  - Use jQuery to `clone` the example markup for each project, as you add additional content.
  - Your Project prototype should have a `.toHtml()` function that adds new data to the DOM.
  - To make it look better, include basic styles: a css reset, content in a single centered column, reasonable margins, etc.

# AJAX and JSON

Our blog has been growing! We now have over 200 posts that we need to load up.

It's time to move that data into a JSON file, and retrieve that file just when we need it with AJAX.

You should be familiar with the pair flow by now. If not, review previous instructions.

## TODOs: MVP
1. Start by looking over what's new in the codebase. There is a /data folder! There are some `// DONE` comments! Practice your code-reading skills.
1. In `index.html`, after we load all our script tags, we need to kick off the retrieval of data, and rendering of the page. What's the right method to call?
1. Fill in what's needed in article.js, so that all the articles are loaded and rendered, and retrieved with AJAX.
1. Actually, we only need to request the JSON file when we don't already have it, so the conditional check should only do the ajax call when localStorage doesn't have the rawData yet.

# TODOs: Stretch Goals
1. Coded as above, we won't request a new JSON file if we've already downloaded it once. This cacheing is problematic: if the JSON file is updated (therefore our cache is "invalid"), a new copy won't be requested from the server unless localStorage is cleared. To overcome this, we could use a small and fast AJAX request with a method of `HEAD`, to request just the headers, and not the contents of the file. The HEAD response will contain a key called "eTag". The value of the eTag header is calculated based on the contents of the file. So if a new article is added (or an existing one is edited even slightly), the eTag will be different.
  - If we cache the eTag, then we can compare our cached version of it with a new eTag check, to determine if we need to get the whole file or not.
  - This can introduce some synchronicity issues, so we'll need to carefully control what methods are calling back to what.

Hint: You'll be able to see everything the server returns, if your AJAX success function looks something like this:
`function(data, message, xhr) {
  console.log(xhr);
}`

Now, go find those `TODO` items in the codebase, and tackle each one of them.

1. Driver: Ensure you copy the starter code folder to a new folder named for your pair!
1. Now cd into that new folder. This is where you will write code.
1. Type `atom .` to open the new folder as a project in Atom.
1. Use the Atom "Find in Project" feature to locate all the TODO items.
1. Work through one or two TODO items, testing your code as you go, until you are happy with how it's working.

## Switch roles
1. Navigator: You can now clone the driver's fork, to your own local dev environment. Get set up as a collaborator, so you can `pull` and `push` changes.
1. Handoff: The navigator now becomes the driver. The new driver now opens the code in Atom (see above), and has hands on the keyboard to work through the next one or two TODO items.

## Submit your assignment

When you are finished with your work (or if time runs out), then submit your work. To do this, you'll create a PR to the upstream repo with your changes, and submit that PR link in Canvas.

See previous instructions, if you'd like to review the steps.

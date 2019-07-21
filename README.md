# angular-image-grid-scroller

# Description
1. Work on test.
  - First test the service to get the images.
  - Test the component in charge to render the gallery.
2. Work on the service layer, calling the API to get the images and multiply the results to 10,000. 
3. Display the images and work on styles.
4. Use `cdkScrollable` to load the images when the user is scrolling and not an once.
5. Use `Angular Material tooltip` for tooltip feature.

# Setup
- Go to `image-scroller` folder
- install dependencies with `npm-install`

# Run
- `ng serve`

# Additional notes
Decide to use `https://picsum.photos/list` as a external data source since is easy to use, but doesn't have
title and description fields, I'm using instead author and author url fields.

# TimeChimp React Coding Challenge 🎧

## Setup 🚀

- Fork this repo
- Install all dependencies using `yarn`
- Run the app using `yarn start`

## Assessment 📖

Use the Spotify API to fetch and display the following items:

- Fetch and display _Released This Week_ songs
  - Use the API path `new-releases`
- Fetch and display _Featured Playlists_
  - Use the API path `featured-playlists`
- Fetch and display _Browse_ genres
  - Use the API path `categories`
- Loading state/UI _(optional, current UX is already clean)_

## Q&A 💡

- Q: Do you resolve each API request one after the other or in parallel?
  - A: The requests are resolved in parallel to prevent blocking the UI
- Q: Where do you make the API requests?
  - A: Auth: Authorization is done with `useAuth` hook and the `access_token` is accessible by the entire app through the `AuthProvider`. Categories: Data fetching is done in the `Discover` page. Could easily be converted to server actions with Nextjs.
- Q: Do you implement state management using something like Redux?
  - A: I use ContextProvider API
- Q: How much logic do you offload out of the UI components?
  - A: I offload as much logic as possible to custom hooks, context providers and pages. This makes the UI components clean and easy to read.

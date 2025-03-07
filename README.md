# Puppy Bowl with RTK Query

In this workshop, we'll be revisiting the [Puppy Bowl API](https://fsa-puppy-bowl.herokuapp.com/api/)! In the previous unit, you were able to interact with this API and dynamically render puppies using just vanilla JS. We will be recreating that project using the new tools at our disposal: namely, React and RTK. A user will be able to view the roster of players, add a player to the roster, see more details about a specific player, and remove a player from the roster.

## Instructions

Much of the code has already been done for you. Your focus will be on using RTK Query to make the fetch calls to the API.

Note: The code is _not_ functional yet! `npm run dev` will serve a broken page until you have completed most of the following steps.

1. In `api.js`, correctly configure `createApi` to use `API_URL` as the base URL.
   1. Add `"Puppy"` as a tag type.
2. In `store.js`, configure the store to use the API slice's auto-generated reducer and custom middleware.
3. In `puppySlice.js`, define the endpoints that will be injected into the API slice.
   1. _(optional)_ Write `transformResponse` and `transformErrorResponse` functions for each endpoint.
4. Update `PuppyList` and `PuppyDetails` to use the correct query endpoints. Read the JSX as well! You will often have to grab more than just `data`.
5. Update `PuppyDetails` to use the correct mutation endpoint in order to remove a puppy from the roster.
6. Update `PuppyForm` to use the correct mutation endpoint so that a puppy is added to the roster when the form is submitted.

## Submission

Please submit the link to your GitHub repository.

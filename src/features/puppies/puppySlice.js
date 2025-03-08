import api from "../../store/api";

const puppyApi = api.injectEndpoints({
  endpoints: (build) => ({
    getPuppies: build.query({
      query: () => "/players",
      transformResponse: (response) => response.data.players, // players array
      transformErrorResponse: (error) => ({
        message: error.data?.error || "Error loading puppy list.",
        status: error.status,
      }),
      providesTags: ["Puppy"], // cache management
    }),

    getPuppy: build.query({
      query: (id) => `/players/${id}`,
      transformResponse: (response) => response.data.player,
      transformErrorResponse: (error, meta) => ({
        message: error.data?.error || "Error loading puppy.",
        status: error.status,
        id: meta.arg, // ID in err
      }),
      providesTags: ["Puppy"],
    }),

    addPuppy: build.mutation({
      query: (newPuppy) => ({
        url: "/players",
        method: "POST",
        body: newPuppy,
      }),
      transformResponse: (response) => response.data.player, // returns new puppy
      transformErrorResponse: (error) => ({
        message: error.data?.error || "Error adding puppy.",
        status: error.status,
      }),
      invalidatesTags: ["Puppy"], // list refresh
    }),

    deletePuppy: build.mutation({
      query: (id) => ({
        url: `/players/${id}`,
        method: "DELETE",
      }),
      transformResponse: (_, meta) => ({
        deletedId: meta.arg,
      }),
      transformErrorResponse: (error, meta) => ({
        message: error.data?.error || "Error deleting puppy.",
        status: error.status,
        attemptedId: meta.arg, // failed ID
      }),
      invalidatesTags: ["Puppy"],
    }),
  }),
});

export const {
  useGetPuppiesQuery,
  useGetPuppyQuery,
  useAddPuppyMutation,
  useDeletePuppyMutation,
} = puppyApi;

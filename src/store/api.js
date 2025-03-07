import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "2411-ftb-et-web-pt";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${COHORT_CODE}/`;

const api = createApi({
  reducerPath: "puppybowlApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}` }),
  tagTypes: ["Puppy"],
});

export default api;

import { FEACH_POSTERS, SEARCHED_POSTERS } from "../action";

export const feachPosters = (payload) => {
  return {
    type: FEACH_POSTERS,
    payload,
  };
};

export const searchedPosters = (payload) => {
  return {
    type: SEARCHED_POSTERS,
    payload,
  };
};

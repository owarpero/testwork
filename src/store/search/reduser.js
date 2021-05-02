import { FEACH_POSTERS, SEARCHED_POSTERS } from "../action";

export default function searchReduser(
  state = { searchReduser: { data: [] } },
  action
) {
  switch (action.type) {
    case FEACH_POSTERS:
      return { ...state, searchText: action.payload };
    case SEARCHED_POSTERS:
      return { ...state, data: action.payload };
    default:
      return state;
  }
}

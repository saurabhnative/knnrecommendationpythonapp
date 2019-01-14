/**
 * Reducer for TV Shows list in homescreen
 */
import * as actionTypes from '../constants/apiConstants.js';
const initialState = {
  isTvShowsFetching: true,
  isTvShowsFetchError: false,
  tvShowItems: [],
  tvShowError: {}
}


export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.TVSHOWSLIST_FETCHING:
    return {
      ...state,
      isTvShowsFetching: true
    }

  case actionTypes.TVSHOWSLIST_FETCH_ERROR:
  return {
    ...state,
    isTvShowsFetching: false,
    isTvShowsFetchError: true,
    tvShowError: action.error
  }

  case actionTypes.TVSHOWSLIST_FETCH_SUCCESS:
  return {
    ...state,
    isTvShowsFetching: false,
    isTvShowsFetchError: false,
    tvShowItems:action.items
  }

  default:
   return state
 }
}

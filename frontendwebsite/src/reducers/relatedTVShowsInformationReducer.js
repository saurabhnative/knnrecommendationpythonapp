/**
 * Reducer for TV Shows list in homescreen
 */
import * as actionTypes from '../constants/apiConstants.js';
const initialState = {
  isRelatedTvShowsFetching: false,
  isRelatedTvShowsFetchError: false,
  relatedTVShowItems: [],
  relarray:[],
  relatedTVShowError: {}
}


export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.RELATED_TVSHOWS_INFORMATION_FETCHING:
    return {
      ...state,
      isRelatedTvShowsFetching: true
    }

  case actionTypes.RELATED_TVSHOWS_INFORMATION_FETCH_SUCCESS:
    return {
      ...state,
      isRelatedTvShowsFetching: false,
      isRelatedTvShowsFetchError: false,
      relatedTVShowItems: action.data.related_show_ids,
    }

  case actionTypes.RELATED_TVSHOWS_INFORMATION_FETCH_ERROR:
    return {
      ...state,
      isRelatedTvShowsFetching: false,
      isRelatedTvShowsFetchError: true,
      relatedTVShowError: action.error
    }

  default:
   return state
 }
}

/**
 * Reducer for TV Shows Information
 */
import * as actionTypes from '../constants/apiConstants.js';
const initialState = {
  isTvShowInformationFetching: true,
  isTvShowInformationFetchError: false,
  tvShowInformation: [],
  tvShowInformationError: {}
}


export default (state = initialState, action) => {
 switch (action.type) {
  case actionTypes.TVSHOW_INFORMATION_FETCHING:
    return {
      ...state,
      isTvShowInformationFetching: true,
      isTvShowInformationFetchError: false
    }

  case actionTypes.TVSHOW_INFORMATION_FETCH_ERROR:
  return {
    ...state,
    isTvShowInformationFetching: false,
    isTvShowInformationFetchError: true,
    tvShowError: action.error
  }

  case actionTypes.TVSHOW_INFORMATION_FETCH_SUCCESS:
  return {
    ...state,
    isTvShowInformationFetching: false,
    isTvShowInformationFetchError: false,
    tvShowInformation:action.data
  }

  default:
   return state
 }
}

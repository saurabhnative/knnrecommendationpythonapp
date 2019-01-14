/**
 * This file contains all handler functions for making
 * api calls for fetching tv shows list
 */
import * as actionTypes from '../../constants/apiConstants.js';
export const Handler = {
  tvShowsListFetching: function() {
    return {
      type: actionTypes.TVSHOWSLIST_FETCHING,
      isLoading: true
    }
  },
  tvShowsListFetchError: function(error) {
    return {
      type: actionTypes.TVSHOWSLIST_FETCH_ERROR,
      error: error
    }
  },
  tvShowsListFetchSuccess: function(items) {
    return {
      type: actionTypes.TVSHOWSLIST_FETCH_SUCCESS,
      items
    }
  },
  tvShowInformationFetching: function() {
    return {
      type: actionTypes.TVSHOW_INFORMATION_FETCHING,
      isLoading: true
    }
  },
  tvShowInformationFetchError: function(error) {
    return {
      type: actionTypes.TVSHOW_INFORMATION_FETCH_ERROR,
      error: error
    }
  },
  tvShowInformationFetchSuccess: function(data) {
    return {
      type: actionTypes.TVSHOW_INFORMATION_FETCH_SUCCESS,
      data: data
    }
  },
  relatedTVShowInformationFetching: function() {
    return {
      type: actionTypes.RELATED_TVSHOWS_INFORMATION_FETCHING,
      isLoading: true
    }
  },
  relatedTVShowInformationFetchError: function(error) {
    return {
      type: actionTypes.RELATED_TVSHOWS_INFORMATION_FETCH_ERROR,
      error: error
    }
  },
  relatedTVShowInformationFetchSuccess: function(data) {
    return {
      type: actionTypes.RELATED_TVSHOWS_INFORMATION_FETCH_SUCCESS,
      data: data
    }
  },
}

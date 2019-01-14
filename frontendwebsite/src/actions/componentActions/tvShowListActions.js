import axios from 'axios';
import {Handler} from '../apiHandlers/tvShowListApiHandlers';
import {ApiBaseUrl, ServerApiBaseUrl} from '../../constants/urlConstants';
export function fetchTvShowsList() {
    return (dispatch) => {
        dispatch(Handler.tvShowsListFetching());
        axios.get(`${ApiBaseUrl}schedule?country=US`)
                  .then(function (response) {
                    // handle success
                    dispatch(Handler.tvShowsListFetchSuccess(response.data));
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                    dispatch(Handler.tvShowsListFetchError(error));
                  })
    };
}

export function fetchTvShowInformation(showId) {
    return (dispatch) => {
        dispatch(Handler.tvShowInformationFetching());
        axios.get(`${ApiBaseUrl}shows/${showId}`)
                  .then(function (response) {
                    // handle success
                    dispatch(Handler.tvShowInformationFetchSuccess(response.data));
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                    dispatch(Handler.tvShowInformationFetchError(error));
                  })
    };
}

export function fetchRelatedTVShows(showId) {
    return (dispatch) => {
        dispatch(Handler.relatedTVShowInformationFetching());
        axios.get(`${ServerApiBaseUrl}relatedshows?showid=${showId}`)
                  .then(function (response) {
                    // handle success
                    dispatch(Handler.relatedTVShowInformationFetchSuccess(response.data));
                  })
                  .catch(function (error) {
                    // handle error
                    console.log(error);
                    dispatch(Handler.relatedTVShowInformationFetchError(error));
                  })
    };
}

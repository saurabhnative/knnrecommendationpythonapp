/**
 * Main reducer File to combine all component level reducers
 */
import { combineReducers } from 'redux';
import tvShowListReducer from './tvShowListReducer';
import tvShowInformationReducer from './tvShowInformationReducer';
import relatedTVShowsInformationReducer from './relatedTVShowsInformationReducer';
export default combineReducers({
 tvShowListReducer,
 tvShowInformationReducer,
 relatedTVShowsInformationReducer
});

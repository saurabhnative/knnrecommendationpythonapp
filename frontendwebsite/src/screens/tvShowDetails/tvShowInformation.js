/**
 * Component to show complete informations about TV show in TV show details page
 * @type {Class}
 */
import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import StarRatings from 'react-star-ratings';

class TVShowInformation extends Component {
  renderShowDetailRow = (rowTitle, rowText) => {
    return(
      <div>
        <span className="title">{rowTitle}</span>
        <span className="text">{rowText}</span>
      </div>
    )
  }
  // show TV show information from prop values
  render() {
    const tvShowInformationObject = this.props.tvShowInformationObject;
    return(
      <div className="showDetails">
        <div className="detailsTitle">
        <h1>Show Information</h1>
        </div>
        {this.renderShowDetailRow("Show Name: ", tvShowInformationObject.name)}
        {this.renderShowDetailRow("Language: ", tvShowInformationObject.language)}
        {this.renderShowDetailRow("Genre: ", tvShowInformationObject.genres.join(" | "))}
        {this.renderShowDetailRow("Status: ", tvShowInformationObject.status)}
        {this.renderShowDetailRow("Network: ", tvShowInformationObject.network.name)}
        <div>
          <span className="title">Schedule: </span>
          <span className="text">
          {tvShowInformationObject.schedule.days}s at {tvShowInformationObject.schedule.time}
          </span>
        </div>
        <div>
          <span className="title">Description: </span>
          <span className="description text">
          {renderHTML(tvShowInformationObject.summary)}
          </span>
        </div>
        <div>
          <span className="title">Rating: </span>
          <span className="text">
          {
            tvShowInformationObject.rating && tvShowInformationObject.rating.average
            ?
            <StarRatings
              rating={tvShowInformationObject.rating.average}
              starRatedColor="red"
              numberOfStars={10}
              name='rating'
              starDimension='20px'
              starSpacing='2px'
            />
            :
            null
          }

          </span>
        </div>
      </div>
    );
  }
}
export default TVShowInformation;

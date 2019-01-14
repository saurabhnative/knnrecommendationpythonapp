/**
 * Component to show complete details about TV show
 * @type {Class}
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderComponent from '../../components/Header/header';
import TVShowInformation from './tvShowInformation';
import { fetchTvShowInformation,fetchRelatedTVShows,fetchTvShowsList } from '../../actions/componentActions/tvShowListActions.js';
import find from 'lodash/find';
import './tvShowDetails.css';
/**
 * Layout Components from antd UI library
 * More info: https://ant.design/components/layout/
 */
import { Layout,Row,Col,Card,Avatar } from 'antd';
const  { Content } = Layout;
const { Meta } = Card;
class TVShowDetails extends Component {
  state = {
    'tvShowInformation' : [],
    'relatedTVShows': []
  }

  componentWillReceiveProps(nextProps) {
    // populate TV show information information section
    if(!nextProps.tvShowInformationState.isTvShowInformationFetching && !nextProps.tvShowInformationState.isTvShowInformationFetchError) {
      const tvShowInformationObject = nextProps.tvShowInformationState.tvShowInformation;
      if( Object.keys(tvShowInformationObject).length !== 0) {
        const tvShowInformation = [];
        tvShowInformation.push(
          <Row key="tvShowInformation" >
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
             {this.renderShowCard(tvShowInformationObject)}
            </Col>
            <Col xs={24} sm={12} md={8} lg={8} xl={6}>
              <TVShowInformation
                tvShowInformationObject={tvShowInformationObject}
              />
            </Col>
          </Row>
        );
        this.setState({ tvShowInformation });
      }
    }

    // populate related TV shows section
    if(!nextProps.relatedTVShowsListState.isRelatedTvShowsFetching && !nextProps.relatedTVShowsListState.isRelatedTvShowsFetchError){
      const relatedTVShowsArray = nextProps.relatedTVShowsListState.relatedTVShowItems;
      const tvShowItems = nextProps.tvShowsListState.tvShowItems;
      if( relatedTVShowsArray.length && tvShowItems.length ) {
        console.log("sdfa", nextProps.tvShowsListState.tvShowItems);
        const relatedTVShows = [];
        relatedTVShows.push(
          <div className="relatedContent" key="relatedContent">
          <div className="relatedContent-heading">
          Related Shows:
          </div>
          <Row key="tvRelatedContent" gutter={2} type="flex" justify="center">
          {(() => {
              let showCards = [];
              let relatedTVShowIds = nextProps.relatedTVShowsListState;
              for(let i in relatedTVShowsArray) {
                let tvShowObject = find(tvShowItems, {id:relatedTVShowsArray[i].id});
                if(tvShowObject){
                  showCards.push(
                    <Col xs={24} sm={12} md={4} lg={4} xl={4} key={i}>
                      {this.renderRelatedContentCard(tvShowObject.show)}
                    </Col>
                  )
                }
              }
              return(showCards)
            })()}
          </Row>
          </div>
        );
        this.setState({ relatedTVShows });
      }
    }
  }
  componentDidMount() {
    // fetch data from appropriate APIs
    this.props.fetchTvShowsList();
    this.props.fetchTvShowInformation(this.props.match.params.showid);
    this.props.fetchRelatedTVShows(this.props.match.params.parentElementId);
  }

  /**
   * Function to render Card of TV show
   * @param  {Object} tvShowInformationObject [information parameter]
   */
  renderShowCard = (tvShowInformationObject) => {
    return(
      <div className="cardContainer flexCenter">
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={tvShowInformationObject.image.medium} />}
          >
          <Meta
            avatar={<Avatar src={tvShowInformationObject.image.medium} />}
            title="Premiered"
            description={tvShowInformationObject.premiered}
          />
        </Card>
      </div>
    );
  }

  renderRelatedContentCard = (tvShowInformationObject) => {
    return(
      <div className="cardContainer flexCenter">
        <Card
          hoverable
          style={{ width: 180 }}
          cover={<img alt="example" src={tvShowInformationObject.image.medium} />}
          >
          <Meta
            avatar={<Avatar src={tvShowInformationObject.image.medium} />}
            title={tvShowInformationObject.name}
            description={tvShowInformationObject.genres[0]}
          />
        </Card>
      </div>
    );
  }

  render() {
    return (
      <Layout>
        <HeaderComponent/>
        <Content>
          {this.state.tvShowInformation}
          {this.state.relatedTVShows}
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShowInformationState: state.tvShowInformationReducer,
    tvShowsListState: state.tvShowListReducer,
    relatedTVShowsListState: state.relatedTVShowsInformationReducer
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchTvShowInformation: (showid) => dispatch(fetchTvShowInformation(showid)),
      fetchRelatedTVShows: (parentElementId) => dispatch(fetchRelatedTVShows(parentElementId)),
      fetchTvShowsList: () => dispatch(fetchTvShowsList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TVShowDetails);

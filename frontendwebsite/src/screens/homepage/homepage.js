/**
 * HomeScreen component to show tv shows list
 * @type {Class}
 */
import React, { Component } from 'react';
import './homepage.css';
import { connect } from 'react-redux';
import { fetchTvShowsList } from '../../actions/componentActions/tvShowListActions.js';
import {  Row, Col } from 'antd';
import { Card } from 'antd';
import HeaderComponent from '../../components/Header/header';
/**
 * Layout Components from antd UI library
 * More info: https://ant.design/components/layout/
 */
import { Layout } from 'antd';
const { Footer, Content } = Layout;
const { Meta } = Card;

class HomeScreen extends Component {
  state = {
    showsList : []
  }

  componentDidMount(){
    this.props.fetchTvShowsList();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.tvShowsListState.tvShowItems.length){
      const topShows = nextProps.tvShowsListState.tvShowItems.filter((item,index) => {
        if(index < 12){
          return true;
        } else {
          return false;
        }
      });
      let rows = [];
      let cols = [];
      topShows.map((tvShow,index) => {
        cols.push(this.renderTVShowData(tvShow));
      });
      rows.push(
        <Row key={"afsd"}>
         {cols}
        </Row>
      );
      this.setState({ showsList: rows});
    }
  }

  /**
   * Funtion to render TV show cards in UI
   * @param  {Object} data [data for each card]
   * @return {JSX Markup}      [Card elements JSX markup]
   */
  renderTVShowData(inputData){
    const data = inputData.show;
    return(
      <Col xs={24} sm={12} md={8} lg={8} xl={6} key={data.name}>
      <center>
      <Card
          hoverable
          className="tvShowCard"
          cover={<img alt="example" src={data.image.medium}/>}
          onClick= {() => this.handleCardClick(data.id, inputData.id)}
        >
          <Meta
            title={data.name}
            description={data.premiered}
          />
        </Card>
        </center>
      </Col>
    )
  }

  /**
   * Function to redirect user to individual show information
   * @param  {Integer} showid [unique id for each show]
   * @param {Integer}   parentElementId [parentid for each show]
   */
  handleCardClick(showid, parentElementId) {
    this.props.history.push(`/showdetails/${showid}/${parentElementId}`);
  }

  render() {
    return (
      <Layout>
        <HeaderComponent/>
        <Content className="content">
        {this.state.showsList}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tvShowsListState: state.tvShowListReducer
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTvShowsList: () => dispatch(fetchTvShowsList())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

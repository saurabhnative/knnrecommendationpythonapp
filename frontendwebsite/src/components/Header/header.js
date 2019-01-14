import React, { Component } from 'react';
import Select from 'react-select';

import './header.css';
import { Layout } from 'antd';
const { Header } = Layout;

const ageOptions = [
  { value: 'teenager', label: '10-20' },
  { value: 'youngadult', label: '20-40' },
  { value: 'adult', label: '40-60' }
];

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' }
];
class HeaderComponent extends Component {
  state = {
    selectedAgeOption: {value: "youngadult", label: "20-40"},
    selectedGenderOption: {value: "female", label: "Female"}
  }
  handleAgeChange = (selectedAgeOption) => {
    this.setState({ selectedAgeOption });
    console.log(`Option selected:`, selectedAgeOption);
  }

  handleGenderChange = (selectedGenderOption) => {
    this.setState({ selectedGenderOption });
    console.log(`Option selected:`, selectedGenderOption);
  }
  render() {
  return(
    <Header>
      <div className="header-row">
      <span className="header-title">TV Shows</span>
      {/*
      <div className="options-row">
        <span className="option-title">
        Age:
        </span>
        <div className="option-select">
          <Select
            value={this.state.selectedAgeOption}
            onChange={this.handleAgeChange}
            options={ageOptions}
          />
        </div>
        <span className="option-title">
        Gender:
        </span>
        <div className="option-select">
          <Select
            value={this.state.selectedGenderOption}
            onChange={this.handleGenderChange}
            options={genderOptions}
          />
        </div>
      </div>*/}
      </div>
    </Header>
  );
  }
}

export default HeaderComponent;

import React from 'react';
// import { Route } from 'react-router-dom';

import Header from './../../components/Header/Header';
import HomeContent from './../Tabs/HomeContent';
import TeachersContent from './../Tabs/TeachersContent';
import StudentsContent from './../Tabs/StudentsContent';

class HomePage extends React.Component {

  state = {
    currentTab: 0
  };

  changeCurrentTab = (event, value) => {
    this.setState({ currentTab: value });
  };

  render() {
    return (
      <div>
        <Header
          value={this.state.currentTab}
          onTabChange={this.changeCurrentTab}
        />
        <main style={{ padding: 20 }}>
          {this.state.currentTab === 0 && <HomeContent />}
          {this.state.currentTab === 1 && <TeachersContent />}
          {this.state.currentTab === 2 && <StudentsContent />}
        </main>
      </div>
    );
  }
}

export default HomePage;
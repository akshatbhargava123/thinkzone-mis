import React from 'react';
// import { Route } from 'react-router-dom';

import Header from './../../components/Header/Header';
import HomeContent from './../Tabs/HomeContent/HomeContent';
import TeachersContent from './../Tabs/TeachersContent/TeachersContent';
import ManagersContent from './../Tabs/ManagersContent/ManagersContent';
import PaymentsContent from './../Tabs/PaymentsContent/PaymentsContent';

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
          {this.state.currentTab === 2 && <ManagersContent />}
          {this.state.currentTab === 3 && <PaymentsContent />}
        </main>
      </div>
    );
  }

}

export default HomePage;
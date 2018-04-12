import React from 'react';
import { Route } from 'react-router-dom';

import HomeCards from './HomeCards';
import TotalCentersTable from './TotalCenters/TotalCenters';
import TotalStudentsTable from './TotalStudents/TotalStudents';
import LearningImprovementsTable from './LearningImprovements/LearningImprovements';

class HomeContent extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/home" component={HomeCards} />
        
        <Route exact path="/home/centers" component={TotalCentersTable} />

        <Route exact path="/home/students" component={TotalStudentsTable} />
        <Route exact path="/home/students/:programName" component={TotalStudentsTable} />

        {/* <Route exact path="/home/learning-improvements" component={LearningImprovementsTable} /> */}
        <Route exact path="/home/learning-improvements/:programName" component={LearningImprovementsTable} />
      </div>
    );
  }
}

export default HomeContent;
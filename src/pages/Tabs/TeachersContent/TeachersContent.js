import React from 'react';
import { Route } from 'react-router-dom';

import TeacherDetailPage from './TeacherDetail/TeacherDetail';
import TeachersTableContent from './TeachersTableContent/TeachersTableContent';

class TeachersContent extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/home/" component={TeachersTableContent} />
        <Route exact path="/home/teacher/:teacherId" component={TeacherDetailPage} />
      </div>
    );
  }
}

export default TeachersContent;
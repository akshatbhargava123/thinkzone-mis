import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DataTable from './../../../../components/Table/Table';

let teacherCounter = 0;
function createTeacherData(center, name, totalStudents, block, district) {
  teacherCounter += 1;
  return { id: teacherCounter, center, name, totalStudents, block, district };
}

/**
 * Teachers = Centers hence this component = TeachersTableContent under teachersContent Tab
 */

class TotalCentersTable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teacherData: this.getData()
    }
  }

  getData = () => {
    // hardcoding currently
    teacherCounter = 0;
    return [
      createTeacherData('Center1', 'Teacher1', 12, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher2', 32, 'blockName', 'Delhi'),
      createTeacherData('Center2', 'Teacher1', 32, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher2', 11, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher1', 13, 'blockName', 'Delhi'),
      createTeacherData('Center5', 'Teacher3', 13, 'blockName', 'Delhi'),
      createTeacherData('Center2', 'Teacher1', 15, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher5', 18, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher1', 13, 'blockName', 'Delhi'),
      createTeacherData('Center6', 'Teacher2', 12, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher1', 13, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher1', 14, 'blockName', 'Delhi'),
      createTeacherData('Center1', 'Teacher1', 13, 'blockName', 'Delhi'),
    ].sort((a, b) => (a.id < b.id ? -1 : 1));
  }

  componentWillMount() {
    this.setState({ teacherData: this.getData() });
  }

  handleClick = (teacher) => {
    this.props.history.push(`/home/teacher/${teacher.id}`);
  }

  render() {
    const teacherHeaderItems = ['S. No.', 'Center Name', 'Teacher Name', 'Total Students', 'Block', 'District'];

    return (
      <div>
        <Paper>
          <Typography
            variant="display1"
            style={{ padding: 30 }}
            component={"h1"}
          >
            Total Centers / Teachers
          </Typography>
          <DataTable
            headerItems={teacherHeaderItems}
            data={this.state.teacherData}
            handleRowClick={(_) => console.log(_)}
          />
        </Paper>
      </div>
    );
  }
}

export default TotalCentersTable;
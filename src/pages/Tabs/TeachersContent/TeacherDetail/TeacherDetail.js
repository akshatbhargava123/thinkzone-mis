import React, { Component } from 'react';

import Typography from 'material-ui/Typography';
import KeyboardBackspaceIcon from 'material-ui-icons/KeyboardBackspace';
import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import DataTable from './../../../../components/Table/Table';
import PersonInfo from './../../../../components/PersonInfo/PersonInfo';

let studentCounter = 0;
function createStudentData(name, center, program, block, district, learningImprovement) {
  studentCounter += 1;
  return { id: studentCounter, name, center, program, block, district, learningImprovement };
}

class TeacherDetail extends Component {

  constructor(props) {
    super(props)
    this.state = {
      // initially show all students
      programName: 'ALL',
      studentData: this.getStudentsData('ALL'),
      teacherInfo: this.getTeacherInfo(this.props.match.params.teacherId)
    }
  }

  getStudentsData = (programName) => {
    // hardcoding currently
    studentCounter = 0;
    const Data = [
      createStudentData('Student1', 'Center1', 'ECD', 'block', 'Delhi', 12),
      createStudentData('Akshat1', 'Center1', 'ECD', 'block', 'Delhi', 9),
      createStudentData('Akshat2', 'Center1', 'PGE', 'block', 'Mumbai', 8),
      createStudentData('Student', 'Center3', 'ECD', 'block', 'Delhi', 11),
      createStudentData('Student2', 'Center2', 'ECD', 'block', 'New Delhi', 12),
      createStudentData('Akshatt', 'Center1', 'PGE', 'block', 'Odisa', 14),
      createStudentData('Student', 'Center2', 'ECD', 'block', 'Delhi', 12),
      createStudentData('Princee', 'Center1', 'PGE', 'block', 'Delhi', 17),
      createStudentData('RajuRaj', 'Center5', 'ECD', 'block', 'Delhi', 15),
      createStudentData('Sakshi', 'Center1', 'ECD', 'block', 'Delhi', 12),
      createStudentData('Student1', 'Center7', 'ECD', 'block', 'Delhi', 12),
      createStudentData('Studentzx', 'Center6', 'PGE', 'block', 'Delhi', 12),
      createStudentData('Studentz', 'Center8', 'PGE', 'block', 'Delhi', 12),
      createStudentData('Studenty', 'Center1', 'PGE', 'block', 'Delhi', 12),
      createStudentData('Studentx', 'Center2', 'PGE', 'block', 'Delhi', 12)
    ];
    if (programName === 'ALL') return Data;
    return Data.filter(student => {
      return student.program === programName
    });
  }

  getTeacherInfo = (teacherId) => {
    return {
      'id': teacherId,
      'Teacher Name': 'Teacher X',
      'Total Students': 12,
      'Block': 'someBlockName',
      'District': 'Delhi'
    };
  }

  handleClick = (student) => {
    console.log(student);
  }

  handleProgramChange = (event) => {
    this.setState({
      programName: event.target.value,
      studentData: this.getStudentsData(event.target.value)
    });
  }

  componentWillMount() {
    this.setState({ studentData: this.getStudentsData('ALL') });
  }

  render() {
    const studentHeaderItems = ['S. No.', 'Student Name', 'Center Name', 'Program Name', 'Block', 'District', 'Learning Improvement'];

    return (
      <div>
        <Button variant="raised" color="primary" >
          <KeyboardBackspaceIcon style={{marginRight: 10}} />
          Go to Teacher / Center Table
        </Button>
        <PersonInfo info={this.state.teacherInfo} infoHeader="Teacher Info" />
        <Paper style={{ marginTop: 20 }}>
          <Typography
            variant="display1"
            style={{ padding: 30 }}
          >
            Students under {this.state.teacherInfo['Teacher Name']}
          </Typography>

          <div style={{ padding: 30 }}>
            <InputLabel htmlFor="program-name" style={{ paddingRight: 10 }}>
              Show Student of Specific Program
            </InputLabel>
            <Select
              value={this.state.programName || "ALL"}
              onChange={this.handleProgramChange}
              inputProps={{
                name: 'program-name',
                id: 'program-name',
              }}
            >
              <MenuItem value={"ALL"}>Total</MenuItem>
              <MenuItem value={"ECD"}>Early Childhood Program</MenuItem>
              <MenuItem value={"PGE"}>Primary Grade Program</MenuItem>
            </Select>
          </div>

          <DataTable
            headerItems={studentHeaderItems}
            data={this.state.studentData}
            handleRowClick={this.handleClick}
          />
        </Paper>
      </div>
    );
  }
}

export default TeacherDetail;
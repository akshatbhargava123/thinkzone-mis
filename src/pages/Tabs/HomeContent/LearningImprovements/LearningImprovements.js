import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DataTable from './../../../../components/Table/Table';
import { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

let ECDDataCounter = 0;
function createECDLIData(level, numStudents, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, totalPercentIncrease) {
  ECDDataCounter += 1;
  return { id: ECDDataCounter, level, numStudents, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, totalPercentIncrease };
}

let PGEDataCounter = 0;
function createPGELIData(level, numStudents, m1, m2, m3, m4, m5, totalPercentIncrease) {
  PGEDataCounter += 1;
  return { id: PGEDataCounter, level, numStudents, m1, m2, m3, m4, m5, totalPercentIncrease };
}

class LearningImprovementsTable extends Component {

  constructor(props) {
    super(props);
    const programName = this.props.match.params.programName;
    console.log(programName);
    this.state = {
      programName: programName
    }
  }

  getECDHeader = () => {
    return ['S. No.', 'Level', 'No. Of Students', 'M-1', 'M-2', 'M-3', 'M-4', 'M-5', 'M-6', 'M-7', 'M-8', 'M-9', 'M-10', 'Total % Increase'];
  }

  getPGEHeader = () => {
    return ['S. No.', 'Level', 'No. Of Students', 'M-1', 'M-2', 'M-3', 'M-4', 'M-5', 'Total % Increase'];
  }

  getData(programName) {
    if (programName === 'ECD') {
      return this.getECDData();
    } else if (programName === 'PGE') {
      return this.getPGEData();
    }
  }

  getECDData = () => {
    // hardcoding currently
    ECDDataCounter = 0;
    return [
      // level, numStudents, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, totalPercentIncrease
      createECDLIData('1', 12, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('2', 32, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('3', 32, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('3', 11, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('2', 13, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('3', 13, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('2', 15, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('1', 18, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('1', 13, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('1', 12, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('3', 13, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('1', 14, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
      createECDLIData('2', 13, 21, 12, 11, 9, 41, 12, 63, 21, 63, 12, 75),
    ].sort((a, b) => (a.id < b.id ? -1 : 1));
  }

  getPGEData = () => {
    // hardcoding currently
    PGEDataCounter = 0;
    return [
      // level, numStudents, m1, m2, m3, m4, m5, totalPercentIncrease
      createPGELIData('1', 12, 21, 12, 11, 9, 41, 12),
      createPGELIData('2', 32, 21, 12, 11, 9, 41, 12),
      createPGELIData('3', 32, 21, 12, 11, 9, 41, 12),
      createPGELIData('3', 11, 21, 12, 11, 9, 41, 12),
      createPGELIData('5', 13, 21, 12, 11, 9, 41, 12),
      createPGELIData('4', 13, 21, 12, 11, 9, 41, 12),
      createPGELIData('2', 15, 21, 12, 11, 9, 41, 12),
      createPGELIData('5', 18, 21, 12, 11, 9, 41, 12),
      createPGELIData('1', 13, 21, 12, 11, 9, 41, 12),
      createPGELIData('1', 12, 21, 12, 11, 9, 41, 12),
      createPGELIData('3', 13, 21, 12, 11, 9, 41, 12),
      createPGELIData('1', 14, 21, 12, 11, 9, 41, 12),
      createPGELIData('2', 13, 21, 12, 11, 9, 41, 12),
    ].sort((a, b) => (a.id < b.id ? -1 : 1));
  }

  handleProgramChange = (event) => {
    this.setState({
      programName: event.target.value,
      LIData: this.getData(event.target.value)
    });
  }

  componentWillMount() {
    this.setState({ LIData: this.getData(this.state.programName) });
  }

  render() {
    const headerData = this.state.programName === 'ECD' ? this.getECDHeader() : this.getPGEHeader();

    return (
      <div>
        <Paper>
          <Typography
            variant="display1"
            style={{ padding: 30 }}
            component={"h1"}
          >
            Learning Improvements - {this.state.programName} Table
          </Typography>

          <div style={{ padding: 30 }}>
            <InputLabel htmlFor="program-name" style={{ paddingRight: 10 }}>
              Show Students of Specific Program
            </InputLabel>
            <Select
              value={this.state.programName || ''}
              onChange={this.handleProgramChange}
              inputProps={{
                name: 'program-name',
                id: 'program-name',
              }}
            >
              <MenuItem value={"ECD"}>Early Childhood Program</MenuItem>
              <MenuItem value={"PGE"}>Primary Grade Program</MenuItem>
            </Select>
          </div>

          <DataTable
            headerItems={headerData}
            data={this.state.LIData}
            handleRowClick={this.handleProgramChange}
          />
        </Paper>
      </div>
    );
  }
}

export default LearningImprovementsTable;
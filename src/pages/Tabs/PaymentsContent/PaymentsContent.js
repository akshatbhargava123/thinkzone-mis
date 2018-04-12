import React, { Component } from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import DataTable from './../../../components/Table/Table';

let teacherCounter = 0;
function createTeacherData(center, name, block, district, totalPayment) {
  teacherCounter += 1;
  return { id: teacherCounter, center, name, block, district, totalPayment };
}

class PaymentsContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      teacherPaymentsData: this.getData()
    }
  }

  getData = () => {
    // hardcoding currently
    teacherCounter = 0;
    return [
      createTeacherData('Center1', 'Teacher1', 'blockName', 'Delhi', 102),
      createTeacherData('Center1', 'Teacher2', 'blockNamey', 'Delhi', 107),
      createTeacherData('Center2', 'Teacher1', 'blockName', 'Kerala', 100),
      createTeacherData('Center1', 'Teacher2', 'blockNamex', 'Kerala', 99),
      createTeacherData('Center1', 'Teacher1', 'blockName2', 'Goa', 832),
      createTeacherData('Center5', 'Teacher3', 'blockName', 'Delhi', 1235),
      createTeacherData('Center2', 'Teacher1', 'blockNamex', 'Delhi', 23),
      createTeacherData('Center1', 'Teacher5', 'blockName', 'Kerala', 21),
      createTeacherData('Center1', 'Teacher1', 'blockNamez', 'Delhi', 123),
      createTeacherData('Center6', 'Teacher2', 'blockName', 'Delhi', 322),
      createTeacherData('Center1', 'Teacher1', 'blockName124', 'Delhi', 532),
      createTeacherData('Center1', 'Teacher1', 'blockName', 'Mumbai', 214),
      createTeacherData('Center1', 'Teacher1', 'blockName', 'Odisha', 654),
    ].sort((a, b) => (a.id < b.id ? -1 : 1));
  }

  componentWillMount() {
    this.setState({ teacherPaymentsData: this.getData() });
  }

  render() {
    const paymentTableHeaderItems = ['S. No.', 'Center Name', 'Teacher Name', 'Block', 'District', 'Total Payment'];

    return (
      <div>
        <Paper>
          <Typography
            variant="display1"
            style={{ padding: 30 }}
            component={"h1"}
          >
            Payments
          </Typography>
          <DataTable
            headerItems={paymentTableHeaderItems}
            data={this.state.teacherPaymentsData}
            handleRowClick={(_) => console.log(_)}
          />
        </Paper>
      </div>
    );
  }
}

export default PaymentsContent;
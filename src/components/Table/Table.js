import React from 'react'

import { withStyles } from 'material-ui/styles';
import Table, {
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
  TablePagination,
  TableRow,
} from 'material-ui/Table';

// import Button from 'material-ui/Button';
// import AddIcon from 'material-ui-icons/Add';

import TablePaginationActions from './TablePaginationActions'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const DataTable = withStyles(styles)(
  class CustomTable extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        page: 0,
        rowsPerPage: 10,
      };
    }

    handleChangePage = (event, page) => {
      this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
      this.setState({ rowsPerPage: event.target.value });
    };

    render() {
      const { classes, data } = this.props;
      const { rowsPerPage, page } = this.state;
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

      return (
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                {this.props.headerItems.map((item, i) => {
                  return <TableCell key={i}>{item}</TableCell>;
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => {
                return (
                  <TableRow key={item.id} onClick={ () => this.props.handleRowClick(item)}>
                    {Object.keys(item).map((key, i) => <TableCell key={i}>{item[key]}</TableCell>)}
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  Actions={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      );
    }
  })

export default DataTable;

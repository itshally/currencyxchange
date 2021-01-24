import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getAllCountries} from '../actions/index'
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { compose } from 'redux';

const styles = (theme) => ({
    tableContainer: {
        maxWidth: '65rem !important',
        width: '100%',
        margin: '2rem auto',
        padding: '1.75rem'
    },
    table: {
        // width: '95rem !important'
    }
});

class ListOfCountries extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getAllCountries()
    }

    render() {
        const { classes } = this.props;
        const cl = this.props.countries.country_list.results;

        return (
            <div>
                <h1>List of All Countries</h1>
                <TableContainer className={classes.tableContainer} component={Paper}>
                    <Table aria-label="simple table" className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Country</TableCell>
                            <TableCell align="right">Contry Code</TableCell>
                            <TableCell align="right">Currency</TableCell>
                            <TableCell align="right">Symbol</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {cl !== undefined
                        ?
                        Object.keys(cl).map((key, index) => (
                            <TableRow key={cl[key].id}>
                                <TableCell component="th" scope="row">
                                    {cl[key].name}
                                </TableCell>
                                <TableCell align="right">{cl[key].id}</TableCell>
                                <TableCell align="right">{cl[key].currencyName}</TableCell>
                                <TableCell align="right">{cl[key].currencySymbol}</TableCell>
                            </TableRow>
                        ))
                        : <h2>Loading...</h2>
                        }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {countries: state.countries}
}

export default compose(
    connect(mapStateToProps, {
        getAllCountries
    }),
    withStyles(styles)
)(ListOfCountries)
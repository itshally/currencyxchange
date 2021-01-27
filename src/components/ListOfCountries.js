import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllCountries} from '../actions/index'
import {withStyles} from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';
import {compose} from 'redux';

const styles = (theme) => ({
    tableContainer: {
        maxWidth: '65rem !important',
        width: '100%',
        margin: '2rem auto',
        padding: '1.75rem',
        overflowX: 'auto'
    },
    h1: {
        padding: '2.5rem 0'
    }
});

class ListOfCountries extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        if (window.location.pathname === '/list-of-countries') {
            this
                .props
                .getAllCountries()
        }
    }

    render() {
        const {classes} = this.props;
        const cl = this.props.countries.country_list.results;

        return (
            <div>
                <h1 className={classes.h1}>List of All Countries</h1>
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
                                ? Object
                                    .keys(cl)
                                    .map((key, index) => (
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

export default compose(connect(mapStateToProps, {getAllCountries}), withStyles(styles))(ListOfCountries)
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getAllCountries} from '../actions/index'
import {withStyles} from '@material-ui/core/styles';
import MaterialTable from 'material-table';
import {compose} from 'redux';

const styles = (theme) => ({
    tableContainer: {
        maxWidth: '70rem !important',
        width: 'auto',
        margin: '2rem auto',
        padding: '0.5rem !important',
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
            <div className={classes.tableContainer}>
                <h1 className={classes.h1}>List of All Countries</h1>
                <MaterialTable
                    title=""
                    columns={[
                        { title: 'Country', field: 'name' },
                        { title: 'Country Code', field: 'id', align: 'center'},
                        { title: 'Currency', field: 'currencyName', align: 'right'},
                        { title: 'Symbol', field: 'currencySymbol', align: 'center' }
                    ]}
                    data={cl !== undefined
                            ? Object
                                .keys(cl)
                                .map((key, index) => cl[key])
                            : undefined
                        }      
                    options={{
                        sorting: true,
                        paginationType: 'normal',
                        showTitle: false,
                        headerStyle: {
                            background: 'rgba(154,204,255,1)',
                            fontWeight: 'bold',
                            fontSize: '1rem'
                        }
                    }}
                    style={{
                        backgroundColor: 'rgba(96.5%, 96.5%, 96.5%, 0.5)',
                        padding: '2rem 0.5rem',
                        margin: '2rem auto',
                        boxShadow: '0px 1px 5px #aeaeae'
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {countries: state.countries}
}

export default compose(connect(mapStateToProps, {getAllCountries}), withStyles(styles))(ListOfCountries)
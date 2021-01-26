import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    Button,
    Grid,
    Divider,
    Paper
} from '@material-ui/core'
import {getAllCountries, convertCurrency} from '../actions/index'

const styles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        width: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2)
    },
    gridItems: {
        margin: 'auto'
    },
    result: {
        padding: '1rem 2rem',
        '& ul': {
            listStyle: 'none',
            margin: '5xp auto',
            width: '50%',
            '& li': {
                border: '1px solid #aeaeae',
                padding: '15px',
                margin: '15px auto',
                borderRadius: '4px',
                '& span': {
                    fontWeight: 'bold'
                }
            }
        }
    }
});

class ConverterForm extends Component {
    constructor(props) {
        super(props)

        this.state = ({fromCountry: '', toCountry: '', amount: 1, currValue: 0})
    }

    componentDidMount() {
        this
            .props
            .getAllCountries()

        if (this.state.fromCountry !== "" && this.state.toCountry !== "") {
            this
                .props
                .convertCurrency(this.state.fromCountry, this.state.toCountry)
        }

    }

    fromCountry = () => {
        const {classes} = this.props;
        const cl = this.props.countries.country_list.results;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">From</InputLabel>
                <Select
                    native
                    value={this.state.fromCountry}
                    onChange={e => {
                    return this.setState({fromCountry: e.target.value})
                }}
                    label="From"
                    inputProps={{
                    name: 'From',
                    id: 'outlined-age-native-simple'
                }}>

                    <option aria-label="None" value=""/> {cl !== undefined
                        ? Object
                            .keys(cl)
                            .map((key, index) => (
                                <option key={cl[key].id} value={cl[key].currencyId}>{cl[key].currencyId}
                                    - {cl[key].name}</option>
                            ))
                        : <p>--</p>
}
                </Select>
            </FormControl>
        )
    }

    toCountry = () => {
        const {classes} = this.props;
        const cl = this.props.countries.country_list.results;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel htmlFor="outlined-age-native-simple">To</InputLabel>
                <Select
                    native
                    value={this.state.toCountry}
                    onChange={e => {
                    return this.setState({toCountry: e.target.value})
                }}
                    label="To"
                    inputProps={{
                    name: 'To',
                    id: 'outlined-age-native-simple'
                }}>

                    <option aria-label="None" value=""/> {cl !== undefined
                        ? Object
                            .keys(cl)
                            .map((key, index) => (
                                <option key={cl[key].id} value={cl[key].currencyId}>{cl[key].currencyId}
                                    - {cl[key].name}</option>
                            ))
                        : <p>--</p>
}
                </Select>
            </FormControl>
        )
    }

    componentDidUpdate(prevProp, prevState) {
        if (prevState.fromCountry !== this.state.fromCountry) {
            this.setState({fromCountry: this.state.fromCountry})
        }

        if (prevState.toCountry !== this.state.toCountry) {
            this.setState({toCountry: this.state.toCountry})
        }

        if (prevProp.converter !== this.props.converter) {
            this.setState({
                currValue: this.props.converter[Object.keys(this.props.converter)] !== undefined
                    ? this.props.converter[Object.keys(this.props.converter)].val
                    : 0
            })
        }
    }

    displayResult = () => {
        const {classes} = this.props;
        return (
            <Paper elevation={0} className={classes.result}>
                <h2>Result:
                </h2>
                <Divider variant="middle"/>
                <ul>
                    <li>
                        <span>From:</span>
                        {this.state.fromCountry}</li>
                    <li>
                        <span>To:</span>
                        {this.state.toCountry}</li>
                    {this.props.converter[Object.keys(this.props.converter)] !== undefined
                        ? <li>
                                <span>Rate:</span>
                                {(this.props.converter[Object.keys(this.props.converter)].val).toFixed(2)}</li>
                        : <li>
                            <span>Rate:</span>
                            --
                        </li>
}
                    <li>
                        <span>Amount:</span>
                        {this.state.amount}</li>
                    <li>
                        <span>Total:</span>
                        {(this.state.currValue * this.state.amount).toFixed(2)}</li>
                </ul>
            </Paper>
        )
    }

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <Grid container spacing={3} justify="center" alignContent="center">
                    <Grid item xs={12} className={classes.gridItems}>
                        <TextField
                            id="outlined-basic"
                            label="Amount"
                            variant="outlined"
                            value={this.state.amount}
                            onChange={(e) => this.setState({amount: e.target.value})}/>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} className={classes.gridItems}>
                        {this.fromCountry()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.gridItems}>
                        {this.toCountry()}
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} className={classes.gridItems}>
                        <Button
                            type="submit"
                            variant="contained"
                            onClick={() => {
                            return this
                                .props
                                .convertCurrency(this.state.fromCountry, this.state.toCountry)
                        }}>Convert</Button>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        {this.displayResult()}
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {converter: state.converter.converted_result, countries: state.countries}
}

export default compose(connect(mapStateToProps, {convertCurrency, getAllCountries}), withStyles(styles))(ConverterForm)
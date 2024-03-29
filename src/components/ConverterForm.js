import React, {Component} from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Grid,
    Divider,
    Paper
} from '@material-ui/core'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {getAllCountries, convertCurrency} from '../actions/index'

const styles = (theme) => ({
    formControl: {
        width: '100% !important'
    },
    gridItems: {
        margin: 'auto',
        width: '100%',
    },
    result: {
        maxWidth: '45rem',
        margin: 'auto',
        padding: '1rem 2rem',
        '& ul': {
            listStyle: 'none',
            margin: '5xp auto',
            width: '100%',
            padding: 0,
            '& li': {
                border: '1px solid #aeaeae',
                textAlign: 'left !important',
                padding: '15px',
                margin: '15px auto',
                borderRadius: '4px',
                '& span': {
                    fontWeight: 'bold',
                    marginRight: '10px'
                }
            }
        }
    },
    submitBtn: {
        boxShadow: 'none',
        width: '100%',
        border: '1px solid rgb(154, 204, 255)',
        background: 'rgb(154, 204, 255)',
        padding: '10px',
        boxShadow: '1px 1px 5px rgb(154, 204, 255)',
        '& :hover':{
            boxShadow: 'none',
            backgroundColor: '#81bfff'
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
        const clArr = []
        if(cl !== undefined){
            Object
            .keys(cl)
            .map((key, index) => (
                clArr.push(cl[key])
            ))
        }

        return (
            <Autocomplete
                className={classes.formControl}
                id="combo-box-demo"
                options={clArr.map(country => country)}
                getOptionLabel={(option) => `${option.name} - ${option.currencySymbol}`}
                renderOption={(option) => (
                  <React.Fragment>
                    {option.name} - {option.currencySymbol}
                  </React.Fragment>
                )}
                freeSolo
                style={{ width: 300 }}
                renderInput={(params) =>  <TextField {...params} 
                inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                label="From Country" variant="outlined" />}
                onChange={(event, newValue) => {
                    if(newValue){
                        this.setState({
                            fromCountry: newValue.currencyId
                        });
                    }
                  }}
            />
        )
    }

    toCountry = () => {
        const {classes} = this.props;
        const cl = this.props.countries.country_list.results;
        const clArr = []
        if(cl !== undefined){
            Object
            .keys(cl)
            .map((key, index) => (
                clArr.push(cl[key])
            ))
        }

        return (
            <Autocomplete
                className={classes.formControl}
                id="combo-box-demo"
                options={clArr.map(country => country)}
                getOptionLabel={(option) => `${option.name} - ${option.currencySymbol}`}
                renderOption={(option) => (
                  <React.Fragment>
                    {option.name} - {option.currencySymbol}
                  </React.Fragment>
                )}
                freeSolo
                style={{ width: 300 }}
                renderInput={(params) =>  <TextField {...params} 
                inputProps={{
                    ...params.inputProps,
                    autoComplete: 'new-password', // disable autocomplete and autofill
                  }}
                label="To Country" variant="outlined" />}
                onChange={(event, newValue) => {
                    if(newValue){
                        this.setState({
                            toCountry: newValue.currencyId
                        });
                    }
                  }}
            />
        )
    }

    componentDidUpdate(prevProp, prevState) {
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
                                    {(this.props.converter[Object.keys(this.props.converter)].val).toFixed(2)}
                                </li>
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
                <Grid container spacing={4} justify="center" alignContent="center">
                    <Grid item xs={12} sm={12} md={4} className={classes.gridItems}>
                        <TextField
                             className={classes.formControl}
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
                            className={classes.submitBtn}
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
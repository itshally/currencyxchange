import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import {TextField, FormControl, InputLabel, Select, Button} from '@material-ui/core'
import {getAllCountries, convertCurrency} from '../actions/index'


const styles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

class ConverterForm extends Component {
    constructor(props){
        super(props)

        this.state = ({
            fromCountry: '',
            toCountry: '',
            amount: 1,
            total: 0,
            currResult: []
        })
    }
    
    componentDidMount(){
        this.props.getAllCountries()       
        this.props.convertCurrency(this.state.fromCountry, this.state.toCountry)
    }

    fromCountry = () => {
        const { classes } = this.props;
        const cl = this.props.countries.country_list.results;

        return (
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">From</InputLabel>
                <Select
                    native
                    value={this.state.fromCountry}
                    onChange={ e => {
                        return this.setState({
                            fromCountry: e.target.value
                        })
                    }}
                    label="From"
                    inputProps={{
                        name: 'From',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    
                    <option aria-label="None" value="" />
                        {cl !== undefined
                        ?
                            Object.keys(cl).map((key, index) => (
                                <option key={cl[key].id} value={cl[key].currencyId}>{cl[key].currencyId}</option>
                            ))
                        : <h2>Loading...</h2>
                        }
            </Select>
        </FormControl>
        )
    }

    toCountry = () => {
        const { classes } = this.props;
        const cl = this.props.countries.country_list.results;
        console.log(this.state.fromCountry, this.state.toCountry)

        return (
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">To</InputLabel>
                <Select
                    native
                    value={this.state.toCountry}
                    onChange={ e => {
                        return this.setState({
                            toCountry: e.target.value
                        })
                    }}
                    label="To"
                    inputProps={{
                        name: 'To',
                        id: 'outlined-age-native-simple',
                    }}
                >
                    
                    <option aria-label="None" value="" />
                        {cl !== undefined
                        ?
                            Object.keys(cl).map((key, index) => (
                                <option key={cl[key].id} value={cl[key].currencyId}>{cl[key].currencyId}</option>  
                            ))
                        : <h2>Loading...</h2>
                        }
            </Select>
        </FormControl>
        )
    }


    componentDidUpdate(prevProp, prevState){
        if(prevState.fromCountry !== this.state.fromCountry){
            this.setState({
                fromCountry: this.state.fromCountry
            })
        }

        if(prevState.toCountry !== this.state.toCountry){
            this.setState({
                toCountry: this.state.toCountry
            })
        }
    }

    render() {
        
        return (
            <React.Fragment>
                  <TextField id="outlined-basic" label="Amount" variant="outlined" />
                  {this.fromCountry()}
                  {this.toCountry()}
                  <input type="submit" variant="contained" onClick={() => this.props.convertCurrency(this.state.fromCountry, this.state.toCountry)}/>
                  <h3>Result: </h3>
                  <ul>
                      <li>From: {this.state.fromCountry}</li>
                      <li>To: {this.state.toCountry}</li>
                      {
                          this.state.fromCountry !== undefined && this.state.toCountry !== undefined && this.props.converter !== undefined
                          ?<li>Rate: {this.props.converter[Object.keys(this.props.converter)].val}</li>
                          :<li>Rate: -- </li>
                      }
                      
                  </ul>
            </React.Fragment>
        )
    }
}


const mapStateToProps = state => {
    return {
        converter: state.converter.converted_result,
        countries: state.countries
    }
}

export default compose(
    connect(mapStateToProps, {
        convertCurrency,
        getAllCountries
    }),
    withStyles(styles)
)(ConverterForm)
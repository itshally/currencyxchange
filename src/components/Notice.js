import React, {Component} from 'react'
import {displayUsageLimit} from '../actions/index'
import {connect} from 'react-redux'
import {compose} from 'redux';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment'

const styles = (theme) => ({
    texts: {
        textAlign: 'left',
        listStyle: 'none',
        lineHeight: '1.75',
        '& span': {
            fontWeight: 'bold',
            marginRight: '10px'
        }
    }
});

class Notice extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setInterval(() => {
            this
                .props
                .displayUsageLimit();
        }, 1000)
    }

    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <h2>Notice:</h2>
                <p className={classes.texts}>
                    The &nbsp;<strong>Free</strong>&nbsp; version of the currency converter API limits me to 100 requests per hour. 
                    See below for the timestamp and how many times it's been used so far. If its limit 
                    of use has been reached, then no data will be displayed and the converter won't work.
                </p>

                <p className={classes.texts}>
                    <em>PS</em>&nbsp;
                    - Please come back after an hour or if the number of usages is fewer than 100. Thank you!
                </p>

                <ul className={classes.texts}>
                    <li>
                        <span>Timestamp:</span>
                        {moment(this.props.apiUsage.limit.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')}
                    </li>
                    <li>
                        <span>Usage:</span>
                        {this.props.apiUsage.limit.usage}
                    </li>
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {apiUsage: state.apiUsage}
}

export default compose(connect(mapStateToProps, {displayUsageLimit}), withStyles(styles))(Notice)
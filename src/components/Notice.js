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
            fontWeight: 'bold'
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
                    Since I am using the
                    <strong>Free</strong>
                    version of the currency converter api, the amount of usage as per request is
                    limited up to 100 request per hour. Please see below for the timestamp and the
                    number of usage has been made so far. If its limit of usage has been reached,
                    please see to it that there won't be any data will display and so the converter
                    won't work either.
                </p>

                <p className={classes.texts}>
                    <em>PS</em>
                    - If that happens, please come back after an hour or if the number of usage is
                    less than 100. Thank you!
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
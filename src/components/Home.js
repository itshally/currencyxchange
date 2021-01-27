import React from 'react'
import {Container, Grid, Paper} from '@material-ui/core'
import ConverterForm from './ConverterForm'
import calculatorSVG from '../assets/img/calculator.svg'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(96.5%, 96.5%, 96.5%, 0.5)',
        padding: '2rem 1.5rem',
        margin: '2rem auto',
        borderRadius: '4px',
        boxShadow: '0px 1px 5px #aeaeae'
    },
    calculator: {
        width: '100%',
        height: '100%',
        maxHeight: '12.5rem',
        marginLeft: '0'
    },
    h1: {
        textAlign: 'center',
        fontSize: '3rem'
    }
});

const Home = () => {
    const {container, calculator, h1} = useStyles();

    return (
        <React.Fragment>
            <Container maxWidth="md" className={container}>
                <Grid container spacing={3} justify="center" alignItems="center">
                    <Grid item xs={12} sm={12} md={4}>
                        <img src={calculatorSVG} className={calculator}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8}>
                        <h1 className={h1}>Online Currency Converter</h1>
                    </Grid>
                </Grid>
            </Container>

            <Container maxWidth="md" className={container}>
                <ConverterForm/>
            </Container>

        </React.Fragment>
    )
}

export default Home
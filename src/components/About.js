import React from 'react'
import {Container, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(96.5%, 96.5%, 96.5%, 0.5)',
        padding: '2rem 3.5rem',
        margin: '2rem auto',
        borderRadius: '4px',
        boxShadow: '0px 1px 5px #aeaeae',
        '& p, h3, ul': {
            textAlign: 'left'
        },
        '& ul': {
            listStyle: 'none',
            padding: 0,
            lineHeight: '1.75',
            '& a': {
                textDecoration: 'none'
            }
        }
    },
    h1: {
        textAlign: 'center',
        fontSize: '3rem'
    }
});

const About = () => {
    const {container, h1} = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md" className={container}>
                <h1 className={h1}>About</h1>
                <Divider variant="middle"/>
                <p>This is another project I created to explore and to practice my skill.</p>
                <p>I have built a currency converter with the help of the technologies I listed
                    below.</p>

                <h3>Technologies I used:</h3>
                <ul>
                    <li>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>
                    </li>
                    <li>
                        <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>
                    </li>
                    <li>
                        <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noopener noreferrer">react-router-dom</a>
                    </li>
                    <li>
                        <a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a>
                    </li>
                    <li>
                        <a href="https://free.currencyconverterapi.com/" target="_blank" rel="noopener noreferrer">The Free Currency Converter API</a>
                    </li>
                    <li>
                        <a href="https://momentjs.com/" target="_blank" rel="noopener noreferrer">MomentJS</a>
                    </li>
                </ul>
            </Container>
        </React.Fragment>
    )
}

export default About

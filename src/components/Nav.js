import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    navbar: {
        background: 'rgba(154,204,255,1) !important',
        boxShadow: 'none',
        '& ul': {
            padding: '0',
            margin: '2rem auto',
            listStyle: 'none',
            display: 'inline-flex',
            textTransform: 'capitalize',
            fontSize: '13pt',
            letterSpacing: '1px',
            '& li': {
                margin: 'auto 0',
                padding: '0 15px 0 0 !important',
                '& a': {
                    textDecoration: 'none',
                    outline: 'none'
                }
            }
        }
    }
});

function Nav() {
    const {navbar} = useStyles();

    return (
        <React.Fragment>
            <AppBar position="fixed" className={navbar}>
                <Toolbar>
                    <ul >
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/list-of-countries">Countries</Link>
                        </li>
                    </ul>
                </Toolbar>
            </AppBar>

        </React.Fragment>
    )
}

export default Nav

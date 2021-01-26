import React from 'react'
import {Container, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    footerContainer: {
        padding: '2rem 3.5rem',
        margin: '2rem auto'
    },
    links: {
        listStyle: 'none',
        display: 'inline-flex',
        margin: '5px auto',
        fontSize: '12px',
        '& li': {
            margin: '0.5px 5px',
            '& a': {
                textDecoration: 'none'
            }
        }
    }
});

const Footer = () => {
    const {footerContainer, links} = useStyles();

    return (
        <Container maxWidth="md" className={footerContainer}>
            <p>Copyright &copy; 2021 Hally. All Rights Reserved</p>
            <Divider variant="middle"/>
            <ul className={links}>
                <li>
                    {/* Disclaimer link */}
                    <a
                        href="https://www.freeprivacypolicy.com/live/00305bec-4559-4438-88b7-8d149158cc37"
                        target="_blank"
                        rel="noopener noreferrer">Disclaimer</a>
                </li>
                <li>
                    {/* Terms & Conditions */}
                    <a
                        href="https://www.freeprivacypolicy.com/live/3baef49f-5820-41f4-9f24-b83dea677f13"
                        target="_blank"
                        rel="noopener noreferrer">Terms & Conditions</a>
                </li>
            </ul>
        </Container>
    )
}

export default Footer

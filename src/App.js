import './App.css';
import {Container} from '@material-ui/core'
import {
    Nav,
    Home,
    About,
    ListOfCountries,
    Footer,
    Notice
} from './components/index'
import {Switch, Route} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        backgroundColor: 'rgba(96.5%, 96.5%, 96.5%, 0.5)',
        padding: '2rem 3.5rem',
        margin: '2rem auto',
        borderRadius: '4px',
        boxShadow: '0px 1px 5px #aeaeae'
    }
});

function App() {
    const {container} = useStyles();

    return (
        <div className="App">
            <Nav/>
            <Container
                maxWidth="lg"
                style={{
                marginTop: '8rem'
            }}>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list-of-countries" component={ListOfCountries}/>
                    <Route exact path="/about" component={About}/>
                </Switch>
            </Container>
            <Container maxWidth="md" className={container}>
                <Notice/>
            </Container>
            <Footer/>
        </div>
    );
}

export default App;

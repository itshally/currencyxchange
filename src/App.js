import './App.css';
import {Container} from '@material-ui/core'
import Home from './components/Home'
import ListOfCountries from './components/ListOfCountries'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
    return (
        <div className="App">
            <Container maxWidth="lg">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/list-of-countries" component={ListOfCountries}/>
                </Switch>
            </Container>
        </div>
    );
}

export default App;

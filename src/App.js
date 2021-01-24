import './App.css';
import {Container} from '@material-ui/core'
import Base from './components/Base'

function App() {
    return (
        <div className="App">
            <Container maxWidth="lg">
              <Base/>
            </Container>
        </div>
    );
}

export default App;

// VERSION LATELY
react-router v4


//  INSTALL REACT-ROUTER-DOM 
npm install react-router-dom


//  IMPORT ROUTER TO USE
import { HashRouter, Route } from 'react-dom'


this.props.history

////////////////////////////////////// HASHROUTER ||  LINK   ///////////////////////////////////////////
import { HashRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

      <HashRouter>
        <div className="App">
          <nav>
            <ul>
              <Link to='/'>Home</Link>
              <Link to='/signup'>Signup</Link>
              <Link to='/details'>Details</Link>
            </ul>
          </nav>
          { router }
        </div>
      </HashRouter>


export default App;
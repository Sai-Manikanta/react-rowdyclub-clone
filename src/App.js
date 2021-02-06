import { Switch, Route } from 'react-router-dom';

// Page components
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Story from './pages/Story';
import Legal from './pages/Legal';
import Collection from './pages/Collection';

const App = () => {
    return ( 
       <div className="app">
           <div className="content">
             <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/shop" component={Shop} />
                <Route path="/cart" component={Cart} />
                <Route path="/story" component={Story} />
                <Route path="/legal/:slug" component={Legal} />
                <Route path="/collections/:slug" component={Collection} />
             </Switch>
           </div>
       </div>
     );
}
 
export default App;
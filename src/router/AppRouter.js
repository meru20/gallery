import { Route, Switch } from 'react-router-dom';
import Homepage from '../pages/homepage'; 
import Navbar from '../components/Navbar';
import SingleLipstick from '../pages/singleLipstick';
// import PlayerStatsPage from '../pages/PlayerStatsPage';

const AppRouter = () => {
    return (
      <div>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/products/:productId' exact component={SingleLipstick}/>
          </Switch>
        </div>
      </div>
    );
  };
  
  export default AppRouter;
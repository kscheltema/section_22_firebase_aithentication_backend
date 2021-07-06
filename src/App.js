import { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const authCTX = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact component={HomePage} />
        {!authCTX.isLoggedIn && <Route path='/auth' component={AuthPage} />}
       {authCTX.isLoggedIn && <Route path='/profile' component={UserProfile} />}
       <Route path='*'>
      <Redirect to='/'/>
       </Route>
      </Switch>
    </Layout>
  );
}

export default App;

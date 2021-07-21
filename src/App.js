import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import SignUp from "../src/components/login/SignUp";
import SignIn from "../src/components/login/SignIn"
function App() {
 return(
<Router>
    <Switch>
	  <Route exact path='/register'  component={SignUp}/>
		<Route exact path='/login' component={SignIn} />
		</Switch>
    </Router>
 );

}
export default App;

import ReactDOM from 'react-dom';
import { browserHistory, IndexRoute, Route, Router } from 'react-router';

import App from './components/app.jsx';
import Home from './components/home.jsx';
import DayOne from './components/day-one.jsx';
import DayTwo from './components/day-two.jsx';
import DayThree from './components/day-three.jsx';
import DayFour from './components/day-four.jsx';
import DayFive from './components/day-five.jsx';
import DaySix from './components/day-six.jsx';

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/day1' component={DayOne} />
      <Route path='/day2' component={DayTwo} />
      <Route path='/day3' component={DayThree} />
      <Route path='/day4' component={DayFour} />
      <Route path='/day5' component={DayFive} />
      <Route path='/day6' component={DaySix} />
    </Route>
  </Router>
);

const container = document.getElementById('container');

ReactDOM.render(routes, container);

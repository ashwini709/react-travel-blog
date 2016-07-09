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
      <Route path='/day1' component={DayOne} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path='/day2' component={DayTwo} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path='/day3' component={DayThree} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path='/day4' component={DayFour} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path='/day5' component={DayFive} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path='/day6' component={DaySix} onUpdate={() => window.scrollTo(0, 0)} />
    </Route>
  </Router>
);

const container = document.getElementById('container');

ReactDOM.render(routes, container);

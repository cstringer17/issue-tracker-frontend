import './App.css';
import Home from './component/home/home';
import About from './component/about/about';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';
import {faCheckSquare, faCoffee, faTicketAlt} from '@fortawesome/free-solid-svg-icons';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import IssueView from "./component/issues/issueView";

library.add(fab, faCheckSquare, faCoffee, faTicketAlt)

function App() {
  return (
    <Router>
      <div>
        <nav className="bg-gray-800">
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">

                    <Link to="/"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                    <Link to="/about"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>

                    <Link to="/issue"
                          className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"> Issues</Link>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>


        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/issue">
            <IssueView issueId={23}/>
          </Route>
          <Route path="/">
            <h1>you in the wrong place</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

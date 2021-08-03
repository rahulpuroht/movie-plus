import logo from './logo.svg';
import './App.css';
import MoviesContainer from './containers/MoviesContainer'
import Header from './components/Header'
import About from './components/About'
import SignUp from './components/SignUp'
import Profile from './components/Profile'
import MovieForm from './components/MovieForm'

import { BrowserRouter as Router,Route ,Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
        <Route path="/movies/new">
            <MovieForm />
          </Route>
          <Route path="/movies/edit/:id">
            <MovieForm />
          </Route>
          <Route path="/movies">
            <MoviesContainer />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;

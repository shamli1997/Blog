import Hero from './Components/Hero'
import './App.css';
import Header from './Components/Header';
import Home from './Container/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContactUs from './Container/ContactUs';
import Post from './Container/Post';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route exact path="/" component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/post/:postId" component={Post} />



      </div>
    </Router>
  );
}

export default App;

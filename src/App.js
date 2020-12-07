import { Router } from '@reach/router';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Nav from './components/Nav';



function App() {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <ArticleList path="/articles"/>
      </Router>
    </div>
    
  );
}

export default App;

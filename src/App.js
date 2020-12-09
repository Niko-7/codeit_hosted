import { Router } from '@reach/router';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <Home path='/' />
        <ArticleList path='/articles/:article_topic' />
        <ArticleList path='/articles' />
        <Article path='/article/:article_id' />
      </Router>
    </div>
  );
};

export default App;

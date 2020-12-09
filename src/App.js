import { Router } from '@reach/router';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <Router>
        <ArticleList path='/articles/:article_topic' />
        <ArticleList path='/' />
        <Article path='/article/:article_id' />
      </Router>
    </div>
  );
};

export default App;

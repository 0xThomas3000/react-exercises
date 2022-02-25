import React from 'react';
import {Routes, Route, useParams, Link, useNavigate} from 'react-router-dom';
import './App.css';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Link to='topics'>Topics</Link>
      <br/><br/>
      <button onClick={() => navigate('topics')}>Topics</button>
      <h1>HOME PAGE</h1>
    </div>
  );
};

const TopicsList = () => {
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`13`}>Topic 13</Link><br/>
      <Link to={`17`}>Topic 17</Link><br/>
      <Link to={`21`}>Topic 21</Link>
    </div>
  );
};

const TopicDetail = () => {
  let {topicId} = useParams();

  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='topics' element={<TopicsList />} />
        <Route path='topics/:topicId' element={<TopicDetail />} />
        <Route path='blog/kkk/topics' element={<TopicsList />} />
        <Route path='blog/kkk/topics/:topicId' element={<TopicDetail />} />
        <Route path='blog/topics' element={<TopicsList />} />
        <Route path='blog/topics/:topicId' element={<TopicDetail />} />
      </Routes>
    </div>
  );
}

export default App;

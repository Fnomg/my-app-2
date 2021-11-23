import './App.css';
import * as React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import {Main} from "./pages/Main";
import {Chats} from "./pages/Chats";
import {Chat} from "./pages/Chat";
import {Friends} from "./pages/Friends";
import {Feed} from "./pages/Feed";
import {PageNotFound} from "./pages/PageNotFound";
import {
  CHATS_ROUTE, FEED_ROUTE,
  FRIENDS_ROUTE,
  MAIN_ROUTE, NOT_FOUND_ROUTE, CHATS_ID_ROUTE
} from './constants/routing';

const App = () => {

  return (
    <Router>
      <nav>
        <Link to={MAIN_ROUTE}>Моя страница</Link>
        <Link to={CHATS_ROUTE}>Мессенеджер</Link>
        <Link to={FRIENDS_ROUTE}>Друзья</Link>
        <Link to={FEED_ROUTE}>Новости</Link>
      </nav>
      <div className="content">
        <Routes>
          <Route path={MAIN_ROUTE} element={<Main />}/>
          <Route path={CHATS_ROUTE} element={<Chats />}>
            <Route path={CHATS_ID_ROUTE} element={<Chat />}/>
          </Route>
          <Route path={FRIENDS_ROUTE} element={<Friends />}/>
          <Route path={FEED_ROUTE} element={<Feed />}/>
          <Route path={NOT_FOUND_ROUTE} element={<PageNotFound />}>Page not found</Route>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App;
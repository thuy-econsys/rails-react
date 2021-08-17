import React from 'react';
import Router from 'react-router';
const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

import SmallApp from './components/SmallApp.react.jsx';
import LoginPage from './components/session/LoginPage.react.jsx';
import SignupPage from './components/session/SignupPage.react.jsx';
import StoriesPage from './components/stories/StoriesPage.react.jsx';
import StoryPage from './components/stories/StoryPage.react.jsx';
import StoryNew from './components/stories/StoryNew.react.jsx';

// TODO is this correct?
module.exports = (
  <Route name="app" path="/" handler={SmallApp}>
    <DefaultRoute handler={StoriesPage} />
    <Route name="login" path="/login" handler={LoginPage}/>
    <Route name="signup" path="/signup" handler={SignupPage}/>
    <Route name="stories" path="/stories" handler={StoriesPage}/>
    <Route name="story" path="/stories/:storyId" handler={StoryPage} />
    <Route name="new-story" path="/story/new" handler={StoryNew}/>
  </Route>
);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrown } from '@fortawesome/free-solid-svg-icons';

import TaskList from './TaskList';

export function PureInboxScreen({error}) {
  const element = <FontAwesomeIcon icon={ faFrown }/>
  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
    <span className="icon-face-sad" >{element}</span>
          <div className="title-message" >Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }

  return (
    <div className="page lists-show"> 
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">To Do List</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}

PureInboxScreen.propTypes = {
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default connect(({ error }) => ({ error }))(PureInboxScreen);
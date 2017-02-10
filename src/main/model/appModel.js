'use strict';

import {VisibilityFilters} from '../actions/actionTypes';

function getAppModel() {
  return {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: [{
      text: 'Buy milk',
      isDone: false
    },
    {
      text: 'Meet the parents',
      isDone: true
    }]
  };
}

const appModel = getAppModel();

module.exports = appModel;

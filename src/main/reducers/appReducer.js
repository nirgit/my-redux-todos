'use strict';
import { combineReducers } from 'redux'
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actionTypes'
const { SHOW_ALL } = VisibilityFilters

function filterReducer(filter = SHOW_ALL, action) {
  if (action && action.type) {
    switch(action.type) {
      case SET_VISIBILITY_FILTER:
        return action.filter
      default:
        return filter;
    }
  }
  return filter;
}

function todosReducer(todos, action) {
  switch(action.type) {
    case ADD_TODO:
      return [
          ...todos,
          {
            text: action.text,
            isDone: false
          }
        ];
    case TOGGLE_TODO:
      return todos.map((todo, index) => {
          if(index === action.index) {
            return Object.assign({}, todo, {
              isDone: !todo.completed
            })
          }
          return todo
        });
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp

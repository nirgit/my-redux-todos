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

function todosReducer(todos = [], action) {
  if (action && action.type) {
    switch(action.type) {
      case ADD_TODO:
        return [
            ...todos,
            {
              id: action.id,
              text: action.text,
              isDone: false
            }
          ];
      case TOGGLE_TODO:
        return todos.map((todo, index) => {
            if(index === action.index) {
              return Object.assign({}, todo, {
                isDone: !todo.isDone
              })
            }
            return todo
          });
      default:
        return todos;
    }
  }
  return todos;
}

const appReducer = combineReducers({
  visibilityFilter: filterReducer,
  todos: todosReducer
});

export default appReducer;

import * as actionTypes from './actionTypes'

let nextTodoId = 0

export function addTodo(text) {
  return {
    'type': actionTypes.ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export function removeTodo(index) {
  return {
    'type': actionTypes.REMOVE_TODO,
    index
  }
}

export function toggleTodo(index) {
  return {
    'type': actionTypes.TOGGLE_TODO,
    index
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: actionTypes.SET_VISIBILITY_FILTER,
    filter
  }
}

import { combineReducers } from "redux"

const entries = (state = [], action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [
        ...state,
        {
          name: "",
          from: "",
          to: "",
        }
      ]
    case "REMOVE_ENTRY":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    case "UPDATE_ENTRY":
      return [
        ...state.slice(0, action.index),
        action.entry,
        ...state.slice(action.index + 1)
      ]
    default:
      return state
  }
}

const editInit = {
  editOpened: -1
}

const edit = (state = editInit, action) => {
  switch (action.type) {
    case "ACTIVATE_EDIT":
      return {
        ...state,
        editOpened: action.index
      }
    case "DEACTIVATE_EDIT":
      return {
        ...state,
        editOpened: -1
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  entries,
  edit
})

export default reducers

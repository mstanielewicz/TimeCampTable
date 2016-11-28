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

const modalInit = {
  modalOpened: -1
}

const modal = (state = modalInit, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        modalOpened: action.index
      }
    case "CLOSE_MODAL":
      return {
        ...state,
        modalOpened: -1
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  entries,
  modal
})

export default reducers

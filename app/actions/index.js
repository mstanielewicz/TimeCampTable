export const addEntry = () => ({
  type: "ADD_ENTRY",
})

export const removeEntry = (index) => ({
  type: "REMOVE_ENTRY",
  index,
})

export const updateEntry = (entry, index) => ({
  type: "UPDATE_ENTRY",
  entry,
  index,
})

export const activateEdit = (index) => ({
  type: "ACTIVATE_EDIT",
  index,
})

export const deactivateEdit = () => ({
  type: "DEACTIVATE_EDIT",
})

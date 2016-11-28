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

export const openModal = (index) => ({
  type: "OPEN_MODAL",
  index,
})

export const closeModal = () => ({
  type: "CLOSE_MODAL",
})

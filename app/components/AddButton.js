import React, { PropTypes } from "react"
import { headerButton } from "./styles.css"

function AddButton (props) {
  return (
    <button className="btn btn-block btn-large btn-success headerButton" onClick={props.handleAddButtonClick}>
      Add entry
    </button>
  )
}

AddButton.propTypes = {
  handleAddButtonClick: PropTypes.func.isRequired,
}

export default AddButton

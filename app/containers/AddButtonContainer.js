import React, { PropTypes } from "react"
import AddButton from "../components/AddButton"

const AddButtonContainer = React.createClass({
  propTypes: {
    handleAddButtonClick: PropTypes.func.isRequired
  },
  render () {
    return (
      <AddButton handleAddButtonClick={this.props.handleAddButtonClick} />
    )
  },
})

export default AddButtonContainer

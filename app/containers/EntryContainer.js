import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { removeEntry, openModal } from "../actions"
import Entry from "../components/Entry"
import EditEntry from "../components/EditEntry"

let EntryContainer = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    name: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
  },
  handleDelete () {
    this.props.dispatch(removeEntry(this.props.index))
  },
  handleEdit () {
    this.props.dispatch(openModal(this.props.index))
  },
  modalOpenedIndex () {
    return this.props.state.modal.modalOpened
  },
  render () {
    return (
      (this.modalOpenedIndex() !== this.props.index)
      ? <Entry
          index={this.props.index}
          name={this.props.name}
          from={this.props.from}
          to={this.props.to}
          handleDelete={this.handleDelete}
          handleEdit={this.handleEdit}
        />
      : <EditEntry
          index={this.props.index}
          name={this.props.name}
          from={this.props.from}
          to={this.props.to}
        />
    )
  },
})

const mapStateToProps = (state) => ({
  state: state
})

EntryContainer = connect(mapStateToProps)(EntryContainer)

export default EntryContainer

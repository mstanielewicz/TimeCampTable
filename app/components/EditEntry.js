import React, { PropTypes } from "react"
import { connect } from "react-redux"
import { removeEntry, closeModal, updateEntry } from "../actions"

let EditEntry = React.createClass({
  propTypes: {
    index: PropTypes.number.isRequired,
    name: PropTypes.string,
    from: PropTypes.string,
    to: PropTypes.string,
  },
  getInitialState () {
    return {
        name: this.props.state.entries[this.props.index].name,
        from: this.props.state.entries[this.props.index].from,
        to: this.props.state.entries[this.props.index].to,
    };
  },
  handleNameChange (e) {
    this.setState({
      name: e.target.value
    });
  },
  handleFromChange (e) {
    this.setState({
      from: e.target.value
    });
  },
  handleToChange (e) {
    this.setState({
      to: e.target.value
    });
  },
  handleSave () {
    this.props.dispatch(closeModal())
    this.props.dispatch(updateEntry(this.state, this.props.index))
  },
  render () {
    return (
      <tr>
        <td className="col-sm-3"><input className="form-control" defaultValue={this.state.name} onChange={this.handleNameChange} /></td>
        <td className="col-sm-3"><input type="date" className="form-control" defaultValue={this.state.from} onChange={this.handleFromChange} /></td>
        <td className="col-sm-3"><input type="date" className="form-control" defaultValue={this.state.to} onChange={this.handleToChange} /></td>
        <td className="col-sm-3">
          <button className="btn btn-sm btn-success" onClick={this.handleSave}>
            Save
          </button>
        </td>
      </tr>
    )
  },
})

const mapStateToProps = (state) => ({
  state: state
})

EditEntry = connect(mapStateToProps)(EditEntry)

export default EditEntry

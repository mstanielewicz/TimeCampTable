import React from "react"
import { connect } from "react-redux"
import { addEntry, activateEdit } from "../actions"
import AddButtonContainer from "./AddButtonContainer"
import Entries from "../components/Entries"

let MainContainer = React.createClass({
  handleAddButtonClick () {
    this.props.dispatch(addEntry())
    this.props.dispatch(activateEdit(this.props.state.entries.length))
  },
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-2 col-sm-offset-10">
            <AddButtonContainer handleAddButtonClick={this.handleAddButtonClick} />
          </div>
        </div>
        <div className="row">
          <table className="table table-condensed">
            <thead>
              <tr>
                <th className="col-sm-3">First name</th>
                <th className="col-sm-3">Date from</th>
                <th className="col-sm-3">Date to</th>
                <th className="col-sm-3">Actions</th>
              </tr>
            </thead>
            <Entries state={this.props.state} />
          </table>
        </div>
      </div>
    )
  },
})

const mapStateToProps = (state) => ({
  state: state
})

MainContainer = connect(mapStateToProps)(MainContainer)

export default MainContainer

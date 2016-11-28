import React, { PropTypes } from "react"
import { connect } from "react-redux"
import EntryContainer from "../containers/EntryContainer"

function Entries (props) {
  return (
    <tbody>
      {
        props.state.entries.map((entry, i) =>
          <EntryContainer
            key={i}
            index={i}
            name={entry.name}
            from={entry.from}
            to={entry.to}
          />
        )
      }
    </tbody>
  )
}

Entries.propTypes = {
  state: PropTypes.object.isRequired,
}

export default Entries

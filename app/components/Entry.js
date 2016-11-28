import React, { PropTypes } from "react"

function Entry (props) {
  return (
    <tr>
      <td className="col-sm-3">{props.name}</td>
      <td className="col-sm-3">{props.from}</td>
      <td className="col-sm-3">{props.to}</td>
      <td className="col-sm-3">
        <button className="btn btn-sm btn-info" onClick={props.handleEdit}>
          Edit
        </button>
        <button className="btn btn-sm btn-danger" onClick={props.handleDelete}>
          Delete
        </button>
      </td>
    </tr>
  )
}

Entry.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string,
  from: PropTypes.string,
  to: PropTypes.string,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}

export default Entry

import React from "react"
import { Link } from "gatsby"
import DetailStyles from "./details.module.css"

export default ({props}) => {

  return (
    <div className={DetailStyles.container}>
      <div className="row">
        <div className="col-12">

          <div className={`media ${DetailStyles.media}`}>
            <img src={props.picture.large} className="mr-3" alt={`${props.name.title} ${props.name.first} ${props.name.last}`} />
            <div className="media-body text-capitalize">
              <h5 className="mt-0">{props.name.title} {props.name.first} {props.name.last}</h5>
              <ul>
                <li><strong>Gender:</strong> {props.gender}</li>
                <li><strong>Email:</strong> {props.email}</li>
                <li><strong>Address:</strong> {props.location.street}, {props.location.city}, {props.location.state}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-12 my-3">
          <Link to="/">Back to Home</Link>
        </div>
      </div>
    </div>
  )
}

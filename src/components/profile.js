import React from "react"
import { Link } from "gatsby"

export default ({props}, index) => {

  return (
    <tr key={`row_${props.email}`} className="text-capitalize">
      <th scope="row">  <Link
          to={`/details/`}
          state={{props}}
        >{props.name.title} {props.name.first} {props.name.last}</Link></th>
      <td>{props.gender}</td>
      <td>{props.email}</td>
      <td>{props.phone}</td>
      <td>  <Link
          to={`/detail/`}
          state={{props}}
        ><img src={props.picture.thumbnail} alt={`${props.name.title} ${props.name.first} ${props.name.last}`} /></Link></td>
    </tr>
  )
}

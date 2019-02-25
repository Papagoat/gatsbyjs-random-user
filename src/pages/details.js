import React from "react"
import Details from "../components/details"

export default ({ location }) => {
const value = location.state.props
return (
<div>
  <Details props={value} />
</div>
)
}

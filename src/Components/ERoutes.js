import React from 'react'
import { Route } from 'react-router-dom'
import Loader from './Loader'

export default function ERoutes(props) {
  //console.log(props);
  return (
    <React.Fragment>
      {props['Routes'].map(element => {
        return (
          <Route
            exact
            render={() => <Loader item={element} handler={props['handler']} />}
            key={element['action']}
            path={element['link']}
          />
        )
      })}
    </React.Fragment>
  )
}

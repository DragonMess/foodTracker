import React from 'react'
import useVisualMode from "../../hooks/useVisualMode"
import NotLogged from './NotLogged';
function Home() {
  const NOT_LOGGED = "NOT LOGGED";
  const LOGGED = "LOGGED";
  const LOADING = "LOADING";
  const CANCELING = "CANCELING";
  const DELETING = "DELETING";
  const ERROR_SAVING = "ERROR SAVING";
  const ERROT_DELETING = "ERROR DELETING";

  return (
    <div>
      <NotLogged></NotLogged>
    </div>
  )
}

export default Home

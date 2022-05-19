import React from 'react'

import { useAppSelector } from './hooks'

import LoginDialog from './components/LoginDialog'
import ComputerDialog from './components/ComputerDialog'
import VideoConnectionDialog from './components/VideoConnectionDialog'
import Chat from './components/Chat'
import Pomodoro from './components/Pomodoro'
// import Debug from './components/Debug'

function App() {
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const computerDialogOpen = useAppSelector((state) => state.computer.computerDialogOpen)
  const videoConnected = useAppSelector((state) => state.user.videoConnected)

  console.log("loggedIn ", loggedIn);
  return (
    <div className="App">
      {/* <Debug /> */}

      {/* Render the LoginDialog if not logged in, else render Chat. */}
      {loggedIn ? <Chat /> : <LoginDialog />}
      {loggedIn && <Pomodoro />}

      {/* Render the ComputerDialog if user is using a computer. */}
      {computerDialogOpen && <ComputerDialog />}

      {/* Render the VideoConnectionDialog if user is not connected to a webcam. */}
      {!computerDialogOpen && !videoConnected && loggedIn && <VideoConnectionDialog />}
    </div>
  )
}

export default App

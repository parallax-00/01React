import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import './App.css'
import UserContextProvider from './context/UserContextProvider'




function App() {


  return (
    <UserContextProvider>
      <p id='para'>Username is not passed using Props but handled by using <br /> the Context functionality which is now available with REACT
        out of the box.
       </p>
     <h1>MiniContext</h1>
      <Login />

      <Profile/>
    </UserContextProvider>
  )
}

export default App

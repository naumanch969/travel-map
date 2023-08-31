import Register from './pages/Auth/Register'
import Login from './pages/Auth/Login'
import Home from './pages/Home/Home'

const App = () => {

  const storage = window.localStorage
  const [showRegister, setShowRegister] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [currentUser, setCurrentUser] = useState(storage.getItem('user'))

  const handleLogout = () => {
    storage.removeItem('user')
    setCurrentUser(null)
}

  return (
    <div className="w-screen h-screen overflow-hidden " >

      <Home />

      {
        currentUser
          ?
          <button onClick={handleLogout} className="absolute top-[10px] right-[10px] border-none p-[5px] rounded-[5px] text-white bg-red-700 " >Log out</button>
          :
          <div className="absolute top-[10px] right-[10px] flex justify-between gap-[4px] " >
            <button onClick={() => setShowLogin(true)} className="border-none p-[5px] rounded-[5px] text-white bg-teal-700 " >Login</button>
            <button onClick={() => setShowRegister(true)} className="border-none p-[5px] rounded-[5px] text-white bg-blue-700 " >Register</button>
          </div>
      }

      {showRegister && <Register setShowRegister={setShowRegister} />}
      {showLogin && <Login setShowLogin={setShowLogin} storage={storage} setCurrentUser={setCurrentUser} />}


    </div>
  )
}

export default App
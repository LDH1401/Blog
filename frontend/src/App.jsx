import './App.css'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import PostListPage from './pages/PostListPage'
import PostPage from './pages/PostPage'
import PostDetailPage from "./pages/PostDetailPage"
import SignInPage from './pages/SignInPage'
import { useState } from 'react'
import NavBar from './components/NavBar'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardPage from './pages/DashboardPage'

const App = () => {
  const [user, setUser] = useState();
  
  const onLogout = () => {
    setUser(null)
  }

  const onLogin = (username) => {
    setUser(username);
  }

  return (
    <BrowserRouter>
      <NavBar user={user} onLogout={onLogout} />

      <Routes>
        <Route path="/" element={<HomePage />}/>

        <Route path="/about" element={<AboutPage />}/>

        <Route path="/posts" element={<PostPage />}>
          <Route index element={<PostListPage />}/>
          <Route path=":slug" element={<PostDetailPage />}/>
        </Route>

        <Route element={<ProtectedRoute user={user}/>}>
          <Route path='/dashboard' element={<DashboardPage/>}/>
        </Route>

        <Route path='/signin' element={<SignInPage onLogin={onLogin} />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App

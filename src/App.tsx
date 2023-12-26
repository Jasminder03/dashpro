import "bootstrap/dist/css/bootstrap.min.css"
import Home from "./Pages/Home/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Profile from "./Pages/Profile/Profile"
import Calendar from "./Pages/Calendar/Calendar"
import { Auth0Provider } from '@auth0/auth0-react';


function App() {

  return (
    <>
      <Auth0Provider
        domain="dev-uqhkfktnrufeygfi.us.auth0.com"
        clientId="2k3x0hIEHfIIcgulFhsor66nXr05tN7W"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile_form" element={<Profile />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </BrowserRouter>
      </Auth0Provider >
    </>
  )
}

export default App

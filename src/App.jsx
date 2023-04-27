import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './assets/styles/GlobalStyle'
import SignupPage from './pages/SignupPage/SignupPage'
import MainPage from './pages/MainPage/MainPage'

function App() {

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<SignupPage />} />
          <Route path={'/timeline'} element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

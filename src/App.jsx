import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './assets/styles/GlobalStyle'
import SignupPage from './pages/SignupPage/SignupPage'

function App() {

  return (
    <>
      <GlobalStyle />

      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

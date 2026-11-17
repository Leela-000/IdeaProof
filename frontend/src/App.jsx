import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SubmitPage from './pages/SubmitPage'
import ExtractionPage from './pages/ExtractionPage'
import ResultsPage from './pages/ResultsPage'
import { IdeaProvider } from './data/IdeaContext'

export default function App() {
  return (
    <IdeaProvider>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/"           element={<HomePage />} />
            <Route path="/submit"     element={<SubmitPage />} />
            <Route path="/extraction" element={<ExtractionPage />} />
            <Route path="/results"    element={<ResultsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </IdeaProvider>
  )
}

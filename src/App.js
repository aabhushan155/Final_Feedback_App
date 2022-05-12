import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './Data/Feedbackdata'
import FeedbackStat from './components/FeedbackStat'
import FeedbackForm from './components/FeedbackForm'
import { FeedbackProvider } from '../src/context/FeedbackContext'
function App() {
  return (
    <FeedbackProvider>
      <Header />
      <div className="container">
        <FeedbackForm />
        <FeedbackStat />
        <FeedbackList />
      </div>
    </FeedbackProvider>
  )
}
export default App

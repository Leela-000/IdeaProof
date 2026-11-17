import { createContext, useContext, useState } from 'react'

// ── Shared state: submitted idea data flows through the app ──

const IdeaContext = createContext(null)

export const INDUSTRIES = [
  'Education & Learning',
  'Health & Wellness',
  'Finance & FinTech',
  'E-commerce & Retail',
  'Productivity & Tools',
  'Travel & Hospitality',
  'Food & Nutrition',
  'Real Estate & PropTech',
  'Entertainment & Media',
  'Sustainability & CleanTech',
  'Social & Community',
  'AI & Machine Learning',
  'Logistics & Supply Chain',
  'HR & Recruitment',
  'Other',
]

const EMPTY_IDEA = {
  name: '',
  description: '',
  industry: '',
  problem: '',
  solution: '',
  audience: '',
}

export function IdeaProvider({ children }) {
  const [idea, setIdea] = useState(EMPTY_IDEA)
  const [mode, setMode] = useState('quick') // 'quick' | 'guided'

  function updateIdea(fields) {
    setIdea(prev => ({ ...prev, ...fields }))
  }

  function resetIdea() {
    setIdea(EMPTY_IDEA)
    setMode('quick')
  }

  return (
    <IdeaContext.Provider value={{ idea, updateIdea, resetIdea, mode, setMode }}>
      {children}
    </IdeaContext.Provider>
  )
}

export function useIdea() {
  const ctx = useContext(IdeaContext)
  if (!ctx) throw new Error('useIdea must be used inside <IdeaProvider>')
  return ctx
}

import Header from './components/Header'
import NewsSection from './components/NewsSection'
import JiraSection from './components/JiraSection'
import QuickLinks from './components/QuickLinks'
import DocsSection from './components/DocsSection'
import AboutSection from './components/AboutSection'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-background">
      <Header />
      <main className="max-w-7xl mx-auto px-6">
        <NewsSection />
        <JiraSection />
        <QuickLinks />
        <DocsSection />
        <AboutSection />
      </main>
    </div>
  )
}

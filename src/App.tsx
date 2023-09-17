import './App.css'
import LayoutHomepage from './layouts/LayoutHomepage'
import JoinUs from './components/JoinUs/JoinUs'
import AboutApp from './components/AboutApp/AboutApp'
import TextWithBg from './components/TextWithBg/TextWithBg'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import ReviewsHomepage from './components/ReviewsHomepage/ReviewsHomepage'

const App = () => {
  return (
    <LayoutHomepage>
      <WelcomeSection />
      <AboutApp />
      <TextWithBg
        text="Most of students who use Learn or Test mode say that Keep Your
        Flashcards helps them get better grades"
      />
      <ReviewsHomepage />
      <JoinUs />
    </LayoutHomepage>
  )
}

export default App

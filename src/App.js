import {BrowserRouter as Router, Route, Routes,} from 'react-router-dom'
import Header from './components/Header'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App(){

    
    return(
        <FeedbackProvider>
            <Router>
                <Header />
                <div className='container'>
                    
                    <Routes>
                        <Route exact path='/' element={<HomePage/>}/>
                        <Route path='/about' element={<AboutPage/>}/>
                    </Routes>
                    <AboutIconLink/>
                </div>
            </Router>
        </FeedbackProvider>
            
        
    )
}

export default App
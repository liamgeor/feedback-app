import PropTypes from 'prop-types'
import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
import FeedbackForm from './FeedbackForm'
import FeedbackData from '../data/FeedbackData'
import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'


function HomePage(props) {

    const [feedback, setFeedback] = useState(FeedbackData)

    const deleteFeedback = (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            setFeedback(feedback.filter((item) => item.id !== id))
        }
        
    }

    const addFeedback = (newFeedback) =>{
        newFeedback.id =  uuidv4();
        setFeedback([newFeedback, ...feedback])
    }

    return (
        <div className="container">
            <FeedbackForm handleAdd={addFeedback}/>
            <FeedbackStats feedback={feedback}/>
            <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
        </div>
    )
}

HomePage.propTypes = {

}

export default HomePage


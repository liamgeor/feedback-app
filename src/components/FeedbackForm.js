import PropTypes from 'prop-types'
import Card from './shared/Card'
import {useState} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback} = useContext(FeedbackContext)
    
    const handleTextChange = (e) =>{
        setText(e.target.value)
        if(e.target.value === ''){
            setBtnDisabled(true)
            setMessage(null)
        } else if(e.target.value.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else{
            setBtnDisabled(false)
            setMessage(null)
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10){
            const newFeedback ={
                text,
                rating
            }
            addFeedback(newFeedback)
            setText('')
        }
        
    }


    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={setRating}/>
                <div className="input-group">
                    <input onChange={handleTextChange} type="text" placeholder='Write a review' value={text} />
                    <Button type='submit' isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    )
}

FeedbackForm.propTypes = {
    addFeedback: PropTypes.func
}

export default FeedbackForm


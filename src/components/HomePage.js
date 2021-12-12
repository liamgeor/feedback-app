import FeedbackStats from './FeedbackStats'
import FeedbackList from './FeedbackList'
import FeedbackForm from './FeedbackForm'



function HomePage(props) {


    return (
        <div className="container">
            <FeedbackForm />
            <FeedbackStats />
            <FeedbackList />
        </div>
    )
}



export default HomePage


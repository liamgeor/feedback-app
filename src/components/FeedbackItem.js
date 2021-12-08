
import {useState} from 'react';
import Card from './shared/Card';

function FeedbackItem({item}) {
    const [rating, setRating] = useState(item.rating);
    const [text, setText] = useState(item.text);

       

    return (
        <Card reverse={true}>
            <div className="num-display">{rating}</div>
            <div className='text-display'>{text}</div>
        </Card>
    )
}

export default FeedbackItem

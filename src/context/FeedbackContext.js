import { createContext, useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) =>{
    const [feedback, setFeedback] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() =>{
        fetchFeedback()
    }, [])

    // Fetch feedback
    const fetchFeedback = async () =>{
        const response = await fetch("/feedback?_sort=id&_order=desc")
        const data = await response.json()

        setFeedback(data)
        setIsLoading(false)
    }

    // Delete feedback
    const deleteFeedback = async (id) =>{
        if(window.confirm('Are you sure you want to delete?')){
            const response = await fetch('/feedback/' + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()

            setFeedback([...feedback.filter((item) => item.id != id)])
        }
    }

    // Add feedback
    const addFeedback = async (newFeedback) =>{
        const response = await fetch('/feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFeedback),
        })

        const data = await response.json();
        setFeedback([data, ...feedback])
    }

    // Edit feedback
    const editFeedback = (item) =>{
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id, updItem) =>{
        // setFeedback(feedback.map((item) => item.id === id ? {... item, ...updItem} : item))
        const response = await fetch('/feedback/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updItem)
        })

        const data = await response.json();
        
        setFeedback([data, ...feedback.filter((item) => item.id != id)])
    }


    return <FeedbackContext.Provider
        value={{
            feedback,
            deleteFeedback,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
            isLoading
        }}
    >{children}</FeedbackContext.Provider>
}


export default FeedbackContext



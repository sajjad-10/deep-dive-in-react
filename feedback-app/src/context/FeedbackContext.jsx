import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "This is from Context 1",
            rating: 10,
        },
        {
            id: 2,
            text: "This is from Context 2",
            rating: 5,
        },
        {
            id: 3,
            text: "This is from Context 3",
            rating: 9,
        },
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
    // Add Feedback
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
    };
    // Delete Feedback
    const deleteFeedback = (id) => {
        if (window.confirm("Are you sure, you want to delete?")) {
            setFeedback(feedback.filter((item) => item.id !== id));
        }
    };
    // Set item to be unbated
    const editFeedback = (item) => {
        setFeedbackEdit({ item, edit: true });
    };
    return (
        <FeedbackContext.Provider
            value={{ feedback, deleteFeedback, addFeedback, editFeedback }}
        >
            {children}
        </FeedbackContext.Provider>
    );
};
export default FeedbackContext;

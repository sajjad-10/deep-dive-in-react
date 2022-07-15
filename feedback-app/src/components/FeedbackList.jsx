import { motion, AnimatePresence } from "framer-motion";
import { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
function FeedbackList() {
    const { feedback, isLoading } = useContext(FeedbackContext);
    if (!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No Feedback Yet</p>;
    }
    return isLoading ? (
       <Spinner/>
    ) : (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.dev
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <FeedbackItem key={item.id} item={item} />
                    </motion.dev>
                ))}
            </AnimatePresence>
        </div>
    );
}
export default FeedbackList;

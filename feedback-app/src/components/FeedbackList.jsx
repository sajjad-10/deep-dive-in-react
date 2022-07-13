import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
function FeedbackList({ feedback, handleDelete }) {
    if (!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>;
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
                {feedback.map((item) => (
                    <motion.dev key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                        <FeedbackItem
                            key={item.id}
                            item={item}
                            handleDelete={handleDelete}
                        />
                    </motion.dev>
                ))}
            </AnimatePresence>
        </div>
    );
}
export default FeedbackList;

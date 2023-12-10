import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

// function FeedbackStats({}) {
//   const { feedback } = useContext(FeedbackContext);

//   // if (!feedback || feedback.length === 0) {
//   //   return (
//   //     <div className="feedback-stats">
//   //       <h4>No Reviews Yet</h4>
//   //     </div>
//   //   );
//   // }

//   // Calculate ratings avg
//   let average =
//     feedback.reduce((acc, curr) => {
//       return acc + curr.rating;
//     }, 0) / feedback.length;

//   average = average.toFixed(1).replace(/[.,]0$/, '');

//   return (
//     <div className="feedback-stats">
//       <h4>{feedback.length} Reviews</h4>
//       <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
//     </div>
//   );
// }

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  const average =
    feedback.length === 0
      ? 0
      : feedback.reduce((acc, { rating }) => acc + rating, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  );
}

export default FeedbackStats;

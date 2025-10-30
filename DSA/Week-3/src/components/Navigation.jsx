import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation = ({ 
  currentSlide, 
  totalSlides, 
  currentTopic,
  totalTopics,
  onNext, 
  onPrev,
  onTopicSelect,
  topics
}) => {
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <>
      <div className="progress-bar-container">
        <motion.div 
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <div className="navigation-controls">
        <motion.button
          className="nav-button prev-button"
          onClick={onPrev}
          disabled={currentSlide === 0}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>

        <div className="slide-counter">
          <span className="current">{currentSlide + 1}</span>
          <span className="separator">/</span>
          <span className="total">{totalSlides}</span>
        </div>

        <motion.button
          className="nav-button next-button"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.button>
      </div>

      <div className="topic-navigation">
        <motion.button
          className="topic-menu-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="topic-icon">📚</span>
          <span className="topic-name">
            {topics[currentTopic]?.name}
          </span>
        </motion.button>

        <div className="topic-menu">
          {topics.map((topic, index) => (
            <motion.button
              key={topic.id}
              className={`topic-item ${index === currentTopic ? 'active' : ''}`}
              onClick={() => onTopicSelect(index)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="topic-number">{index + 1}</span>
              <div className="topic-info">
                <span className="topic-title">{topic.name}</span>
                <span className="topic-duration">{topic.duration}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <div className="keyboard-hints">
        <span className="hint">← → Navigate</span>
        <span className="hint">ESC Menu</span>
      </div>
    </>
  );
};

export default Navigation;

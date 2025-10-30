import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Slide from './components/Slide';
import Navigation from './components/Navigation';
import { presentationData } from './data/presentationData';
import './App.css';

function App() {
  const [currentTopicIndex, setCurrentTopicIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [showWelcome, setShowWelcome] = useState(true);

  const currentTopic = presentationData.topics[currentTopicIndex];
  const allSlides = presentationData.topics.flatMap(topic => topic.slides);
  
  const getGlobalSlideIndex = () => {
    let index = 0;
    for (let i = 0; i < currentTopicIndex; i++) {
      index += presentationData.topics[i].slides.length;
    }
    return index + currentSlideIndex;
  };

  const globalSlideIndex = getGlobalSlideIndex();
  const totalSlides = allSlides.length;

  const nextSlide = () => {
    if (currentSlideIndex < currentTopic.slides.length - 1) {
      setDirection(1);
      setCurrentSlideIndex(prev => prev + 1);
    } else if (currentTopicIndex < presentationData.topics.length - 1) {
      setDirection(1);
      setCurrentTopicIndex(prev => prev + 1);
      setCurrentSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setDirection(-1);
      setCurrentSlideIndex(prev => prev - 1);
    } else if (currentTopicIndex > 0) {
      setDirection(-1);
      setCurrentTopicIndex(prev => prev - 1);
      setCurrentSlideIndex(presentationData.topics[currentTopicIndex - 1].slides.length - 1);
    }
  };

  const selectTopic = (topicIndex) => {
    if (topicIndex !== currentTopicIndex) {
      setDirection(topicIndex > currentTopicIndex ? 1 : -1);
      setCurrentTopicIndex(topicIndex);
      setCurrentSlideIndex(0);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (showWelcome) return;

      switch(e.key) {
        case 'ArrowRight':
        case ' ':
          nextSlide();
          break;
        case 'ArrowLeft':
          prevSlide();
          break;
        case 'Home':
          setCurrentTopicIndex(0);
          setCurrentSlideIndex(0);
          break;
        case 'End': {
          const lastTopicIndex = presentationData.topics.length - 1;
          setCurrentTopicIndex(lastTopicIndex);
          setCurrentSlideIndex(presentationData.topics[lastTopicIndex].slides.length - 1);
          break;
        }
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentTopicIndex, currentSlideIndex, showWelcome]);

  if (showWelcome) {
    return (
      <div className="welcome-screen">
        <h1>Data Structures & Algorithms</h1>
        <p>
          A comprehensive guide to mastering DSA in JavaScript
          <br />
          Covering: Linked Lists, Recursion, Trees, Graphs, DP & More
        </p>
        <button 
          className="start-button"
          onClick={() => setShowWelcome(false)}
        >
          Start Presentation →
        </button>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="presentation-container">
        <div className="slides-wrapper">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <Slide 
              key={`${currentTopicIndex}-${currentSlideIndex}`}
              slide={currentTopic.slides[currentSlideIndex]}
              direction={direction}
            />
          </AnimatePresence>
        </div>

        <Navigation
          currentSlide={globalSlideIndex}
          totalSlides={totalSlides}
          currentTopic={currentTopicIndex}
          totalTopics={presentationData.topics.length}
          onNext={nextSlide}
          onPrev={prevSlide}
          onTopicSelect={selectTopic}
          topics={presentationData.topics}
        />
      </div>
    </div>
  );
}

export default App;

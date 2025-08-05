import StorySection from './StorySection';
import { storySteps } from '../data/storyData';
import EndImageSection from './EndImageSection';

const Journey = () => {
  return (
    <section id="journey" className="journey-container">
      {storySteps.map((step) => (
        <StorySection key={step.id} step={step} />
      ))}
      <EndImageSection />
    </section>
  );
};

export default Journey; 
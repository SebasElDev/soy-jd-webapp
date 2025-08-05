import type { StoryStep } from '../data/storyData';
import { useIntersection } from '../hooks/useIntersection';

interface Props {
  step: StoryStep;
}

const StorySection: React.FC<Props> = ({ step }) => {
  const [ref, isVisible] = useIntersection<HTMLDivElement>({ threshold: 0.3 });

  return (
    <div ref={ref} className={`story-section ${isVisible ? 'visible' : ''}`}>
      <div className="story-content">
        <h2>{step.title}</h2>
        <p>{step.text}</p>
      </div>
      <img src={step.image} alt={step.title} className="story-image" />
    </div>
  );
};

export default StorySection; 
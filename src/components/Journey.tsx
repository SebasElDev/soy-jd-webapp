import StorySection from "./StorySection";
import { storySteps } from "../data/storyData";

const Journey = () => {
  return (
    <section id="journey" className="journey-container">
      {storySteps.map((step) => (
        <StorySection key={step.id} step={step} />
      ))}
    </section>
  );
};

export default Journey;

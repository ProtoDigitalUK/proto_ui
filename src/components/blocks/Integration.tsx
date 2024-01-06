// Components
import Section from "src/components/layout/Section.tsx";
import SectionHeading from "src/components/layout/SectionHeading.tsx";

const Integration: React.FC = () => {
  // --------------------------
  // Render
  return (
    <Section isLast={true}>
      <SectionHeading id="integration" title="Integration" />
      <div className="pb-10">
        Adipisicing ullamco et velit occaecat laboris nostrud Lorem irure id
        proident eiusmod adipisicing officia ea. Amet et id culpa consequat sit
        sunt ad ut esse occaecat excepteur. Reprehenderit excepteur
        reprehenderit consequat labore duis. Amet fugiat est voluptate
        consectetur.
      </div>
    </Section>
  );
};

export default Integration;

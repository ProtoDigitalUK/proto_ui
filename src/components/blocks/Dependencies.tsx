import { type VariationT } from "src/data/components";
// Components
import Section from "src/components/layout/Section.tsx";
import SectionHeading from "src/components/layout/SectionHeading.tsx";

interface DependenciesProps {
  dependencies: VariationT["dependencies"];
}

const Dependencies: React.FC<DependenciesProps> = ({ dependencies }) => {
  return (
    <Section>
      <SectionHeading id="dependencies" title="Dependencies" />
      {dependencies && dependencies.length > 0 ? (
        <ul>
          {dependencies.map((dependency) => (
            <li key={dependency.slug}>
              <p className="text-sm">{dependency.slug}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm">No dependencies found</p>
      )}
    </Section>
  );
};

export default Dependencies;

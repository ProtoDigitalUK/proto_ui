import components, { type VariationT } from "@/data/components";
import { useMemo } from "react";
// Components
import Section from "@/components/layout/Section.tsx";
import SectionHeading from "@/components/layout/SectionHeading.tsx";
import ComponentCard from "@/components/cards/ComponentCard.tsx";

interface DependenciesProps {
  dependencies: VariationT["dependencies"];
}

const Dependencies: React.FC<DependenciesProps> = ({ dependencies }) => {
  if (!dependencies || dependencies.length === 0) return null;

  return (
    <Section>
      <SectionHeading id="dependencies" title="Dependencies" />
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {dependencies.map((dependency) => (
          <DependencyItem
            key={dependency.slug}
            slug={dependency.slug}
            parent={dependency.parent}
          />
        ))}
      </ul>
    </Section>
  );
};

const DependencyItem: React.FC<{ slug: string; parent: string }> = ({
  slug,
  parent,
}) => {
  // -----------------------------
  // Memos
  const componentData = useMemo(() => {
    return components.find(
      (component) => component.slug === slug && component.parent === parent
    );
  }, [slug, parent]);

  if (!componentData) return null;

  return <ComponentCard component={componentData} />;
};

export default Dependencies;

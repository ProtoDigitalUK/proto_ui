// Components
import CodePreview from "@/components/blocks/CodePreview";
import Section from "@/components/layout/Section.tsx";
import SectionHeading from "@/components/layout/SectionHeading.tsx";

interface BuilderConfigProps {
  code: string | undefined;
}

const BuilderConfig: React.FC<BuilderConfigProps> = ({ code }) => {
  if (!code) return null;

  return (
    <Section>
      <SectionHeading
        id="builder"
        title="Builder Config"
        description="If you're using Proto Headless CMS, you can use the following code snippet to quiclly get the brick configured."
      />
      <div className="rounded-md overflow-hidden">
        <CodePreview code={code} />
      </div>
    </Section>
  );
};

export default BuilderConfig;

// Components
import CodePreview from "@/components/blocks/CodePreview";
import Section from "@/components/layout/Section.tsx";
import SectionHeading from "@/components/layout/SectionHeading.tsx";

interface BuilderConfigProps {
  code: string | undefined;
}

const BuilderConfig: React.FC<BuilderConfigProps> = ({ code }) => {
  return (
    <Section>
      <SectionHeading
        id="builder"
        title="Builder Config"
        description="If you're using Proto Headless CMS, you can use the following code snippet to quiclly get the brick configured."
      />
      {code ? (
        <div className="rounded-md overflow-hidden">
          <CodePreview code={code} />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full">
          <p className="text-2xl font-bold text-gray-500">
            No variations found
          </p>
        </div>
      )}
    </Section>
  );
};

export default BuilderConfig;

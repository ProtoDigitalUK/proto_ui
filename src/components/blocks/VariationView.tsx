import { useState } from "react";
import { type VariationT } from "@/data/components";
// Components
import CodePreview from "@/components/blocks/CodePreview";
import Section from "@/components/layout/Section.tsx";
import BuilderConfig from "@/components/blocks/BuilderConfig.tsx";
import Dependencies from "@/components/blocks/Dependencies.tsx";

interface VariationViewProps {
  parent: string;
  slug: string;
  variations: VariationT[];
}

const VariationView: React.FC<VariationViewProps> = (props) => {
  // -----------------------------
  // State
  const [getActiveVariation, setActiveVariation] = useState<
    VariationT | undefined
  >(props.variations.length > 0 ? props.variations[0] : undefined);

  // -----------------------------
  // Render
  if (!getActiveVariation)
    return (
      <div className="flex flex-col items-center justify-center w-full h-full">
        <p className="text-2xl font-bold text-gray-500">No variations found</p>
      </div>
    );

  return (
    <>
      <Section>
        {props.variations.length > 1 && (
          <ul className="mb-2.5 flex gap-2 flex-wrap">
            {props.variations.map((variation) => (
              <li key={variation.key}>
                <button
                  className={`px-2.5 py-1 text-sm rounded-md border hover:bg-opacity-90 transition-colors duration-200 ${
                    variation.key === getActiveVariation.key
                      ? "bg-ui-accent-1 text-white"
                      : "bg-white text-black hover:bg-ui-accent-1 hover:text-white"
                  }`}
                  onClick={() => {
                    setActiveVariation(variation);
                  }}
                >
                  {variation.title}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div id="components">
          <iframe
            className="variation-iframe w-px min-w-full border border-b-0 border-ui-border rounded-t-md bg-white"
            src={`/${props.parent}/${props.slug}/${getActiveVariation.key}`}
          />
          <div className="relative rounded-b-md overflow-hidden">
            <CodePreview code={getActiveVariation.raw} />
          </div>
        </div>
      </Section>
      <BuilderConfig code={getActiveVariation.builderConfig || undefined} />
      <Dependencies dependencies={getActiveVariation.dependencies} />
    </>
  );
};

export default VariationView;

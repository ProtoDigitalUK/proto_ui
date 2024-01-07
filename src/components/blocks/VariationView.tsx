import { useState } from "react";
import { type VariationT } from "@/data/components";
import voidIllustraion from "@/assets/void-illustration.svg";
// Components
import CodePreview from "@/components/blocks/CodePreview";
import Section from "@/components/layout/Section.tsx";
import BuilderConfig from "@/components/blocks/BuilderConfig.tsx";
import Dependencies from "@/components/blocks/Dependencies.tsx";
import ErrorBlock from "@/components/blocks/ErrorBlock.tsx";

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
      <ErrorBlock
        illustration={voidIllustraion.src}
        title="No Component Found"
        description="This component doesnt have any variations. Please come back later."
      />
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
        <div id="components" className="relative">
          <iframe
            className="variation-iframe w-px min-w-full border border-b-0 border-ui-border rounded-t-md bg-white"
            src={`/${props.parent}/${props.slug}/${getActiveVariation.key}`}
          />
          <div className="relative rounded-b-md overflow-hidden">
            <CodePreview code={getActiveVariation.raw} />
          </div>
          <a
            href={`/${props.parent}/${props.slug}/${getActiveVariation.key}`}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute right-2.5 top-2.5 bg-white hover:bg-ui-accent-1 text-black hover:text-white rounded-md h-8 w-8 flex items-center justify-center text-sm transition-colors duration-200"
          >
            <span className="sr-only">Preview Component</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
              className="fill-current"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </a>
        </div>
      </Section>
      <BuilderConfig code={getActiveVariation.builderConfig || undefined} />
      <Dependencies dependencies={getActiveVariation.dependencies} />
    </>
  );
};

export default VariationView;

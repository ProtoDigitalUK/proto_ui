// Bricks
import CallToAction from "@/proto/components/bricks/CallToAction/CallToAction.astro";
import CallToActionRaw from "@/proto/components/bricks/CallToAction/CallToAction.astro?raw";
import CallToActionBuilder from "@/proto/components/bricks/CallToAction/CallToAction.builder?raw";
// Layouts
// Partials

export interface VariationT {
  key: string;
  value: any;
  raw: string;
  title: string;
  props?: Record<string, any>;
  dependencies?: Array<{
    parent: "bricks" | "layouts" | "partials";
    slug: string;
  }>;
  builderConfig?: string;
}

export interface ComponentT {
  parent: "bricks" | "layouts" | "partials";
  slug: string;
  title: string;
  overview: string;
  preview: string;
  variations: VariationT[];
}

const bricks: ComponentT[] = [
  {
    parent: "bricks",
    slug: "header",
    title: "Header",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "bricks",
    slug: "hero",
    title: "Hero",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "bricks",
    slug: "call-to-action",
    title: "Call to Action",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [
      {
        key: "basic",
        value: CallToAction,
        raw: CallToActionRaw,
        builderConfig: CallToActionBuilder,
        title: "Basic",
        props: {
          title: "Call to Action",
          description:
            "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
        },
        dependencies: [
          {
            parent: "partials",
            slug: "button",
          },
        ],
      },
    ],
  },
];

const layouts: ComponentT[] = [
  {
    parent: "layouts",
    slug: "standard",
    title: "Standard",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "layouts",
    slug: "article",
    title: "Article",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
];

const partials: ComponentT[] = [
  {
    parent: "partials",
    slug: "button",
    title: "Button",
    preview: "https://placehold.co/600x338",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
];

export const parentDetails = {
  bricks: {
    title: "Bricks",
    description:
      "Bricks are the building blocks of your website, in most systems they are called components.",
  },
  layouts: {
    title: "Layouts",
    description: "Layouts control the structure of your websites pages.",
  },
  partials: {
    title: "Partials",
    description:
      "Partials are small highly reusable components that can be used in multiple locations.",
  },
};

export default [...bricks, ...layouts, ...partials];

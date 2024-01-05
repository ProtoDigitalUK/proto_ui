// Bricks
import CallToAction from "@/proto/components/bricks/CallToAction/CallToAction.astro";
import CallToActionRaw from "@/proto/components/bricks/CallToAction/CallToAction.astro?raw";
// Layouts
// Partials

export interface ComponentT {
  parent: "bricks" | "layouts" | "partials";
  slug: string;
  title: string;
  overview: string;
  variations: Array<{
    key: string;
    value: any;
    raw: string;
    title: string;
    props?: Record<string, any>;
    dependencies?: string[];
  }>;
}

const bricks: ComponentT[] = [
  {
    parent: "bricks",
    slug: "header",
    title: "Header",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "bricks",
    slug: "hero",
    title: "Hero",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "bricks",
    slug: "call-to-action",
    title: "Call to Action",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [
      {
        key: "basic",
        value: CallToAction,
        raw: CallToActionRaw,
        title: "Basic",
        props: {
          title: "Call to Action",
          description:
            "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
        },
      },
    ],
  },
];

const layouts: ComponentT[] = [
  {
    parent: "layouts",
    slug: "standard",
    title: "Standard",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
  {
    parent: "layouts",
    slug: "article",
    title: "Article",
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
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    variations: [],
  },
];

export const parentDetails = {
  bricks: {
    title: "Bricks",
  },
  layouts: {
    title: "Layouts",
  },
  partials: {
    title: "Partials",
  },
};

export default [...bricks, ...layouts, ...partials];

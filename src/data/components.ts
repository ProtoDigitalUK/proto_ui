// Bricks
import CallToAction from "@/components/proto/bricks/CallToAction/CallToAction.astro";
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
    props?: Record<string, any>;
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

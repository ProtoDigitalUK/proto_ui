import CallToAction from "@/components/proto/bricks/CallToAction/CallToAction.astro";

export interface BrickT {
  slug: string;
  title: string;
  overview: string;
  components: Array<{
    key: string;
    value: any;
  }>;
}

const bricks: BrickT[] = [
  {
    slug: "header",
    title: "Header",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    components: [],
  },
  {
    slug: "hero",
    title: "Hero",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    components: [],
  },
  {
    slug: "call-to-action",
    title: "Call to Action",
    overview:
      "Labore ex officia culpa velit. Aliquip velit labore ex dolor amet in. Lorem mollit elit ipsum pariatur.",
    components: [
      {
        key: "basic",
        value: CallToAction,
      },
    ],
  },
];

export default bricks;

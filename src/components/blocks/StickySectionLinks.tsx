interface StickySectionLinksProps {
  sections?: {
    id: string;
    label: string;
  }[];
}

const StickySectionLinks: React.FC<StickySectionLinksProps> = ({
  sections,
}) => {
  // ----------------------------
  // Render
  return (
    <nav className="bg-ui-accent-1-light sticky top-0 z-50 ">
      <ul className="ui__wrapper flex h-10 items-center gap-5 overflow-x-auto">
        {sections?.map((section, index) => (
          <li key={index}>
            <a
              href={`#${section.id}`}
              className="h-full text-white font-medium"
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default StickySectionLinks;

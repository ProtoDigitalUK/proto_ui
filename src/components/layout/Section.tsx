interface SectionProps {
  children: React.ReactNode;
  isLast?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, isLast }) => {
  return (
    <section className={`my-10 mb-14 last:mb-10 ${isLast ? "!mb-0" : ""}`}>
      <div className="ui__wrapper">{children}</div>
    </section>
  );
};

export default Section;

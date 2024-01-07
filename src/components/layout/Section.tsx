interface SectionProps {
  id?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => {
  return (
    <section id={id} className={`mt-10 last:pb-10`}>
      <div className="ui__wrapper">{children}</div>
    </section>
  );
};

export default Section;

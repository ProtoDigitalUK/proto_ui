// Components
import H2 from "@/components/partials/H2.tsx";
import P from "@/components/partials/P.tsx";

interface SectionHeadingProps {
  id?: string;
  title: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  title,
  description,
}) => {
  return (
    <div
      id={id}
      className="w-full mb-5 ui__typography border-b border-ui-border pb-5"
    >
      <H2>{title}</H2>
      {description && <P>{description}</P>}
    </div>
  );
};

export default SectionHeading;

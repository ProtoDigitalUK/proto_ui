// Components
import Section from "@/components/layout/Section.tsx";

interface ErrorBlockProps {
  illustration: string;
  title: string;
  description: string;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({
  illustration,
  title,
  description,
}) => {
  return (
    <Section>
      <div className="flex flex-col items-center justify-center border border-ui-border rounded-md bg-white p-10">
        <img
          src={illustration}
          alt="Void"
          className="max-w-[200px] w-full mb-8"
        />
        <h3 className="text-lg font-bold text-center">{title}</h3>
        <p className="text-base font-normal text-ui-text-body mt-1.5 max-w-xl">
          {description}
        </p>
      </div>
    </Section>
  );
};

export default ErrorBlock;

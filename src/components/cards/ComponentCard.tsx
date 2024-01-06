import { type ComponentT } from "src/data/components";

interface ComponentCardProps {
  component: ComponentT;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  return (
    <li>
      <a href={`/${component.parent}/${component.slug}`}>
        <h3>{component.title}</h3>
      </a>
    </li>
  );
};

export default ComponentCard;

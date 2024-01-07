import { type ComponentT } from "@/data/components";
// Components
import Aspect from "@/components/partials/Aspect.tsx";

interface ComponentCardProps {
  component: ComponentT;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component }) => {
  return (
    <li className="">
      <a
        href={`/${component.parent}/${component.slug}`}
        className="border border-ui-border rounded-md block p-2.5 group bg-white hover:bg-ui-background hover:border-ui-background hover:text-white duration-200 transition-colors"
      >
        <Aspect classes="mb-2.5 rounded-md overflow-hidden">
          <img
            className="block w-full h-full object-contain"
            src={component.preview}
            loading="lazy"
            alt={component.title}
          />
        </Aspect>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="16"
            viewBox="0 0 576 512"
            className="fill-current mr-2.5"
          >
            <path d="m290.8 48.6 78.4 29.7-81.2 31.2-81.2-31.2 78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5v112.2c-1.3.4-2.6.8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7v119.2c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4L308 3.7c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zm256 118.1-82.4 31.2v-89.2L392 121v89.6zm-237.2 40.3 78.4 29.7-81.2 31.1-81.2-31.1 78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8l82.4-31.6v95.9l-82.4 36.2zm247.6-204.4c1.8-.7 3.8-.7 5.7 0l78.4 29.7-81.3 31.1-81.2-31.1 78.4-29.7zm102 170.3-77.6 34.1V354.8l82.4-31.6v90.7c0 3.2-1.9 6-4.8 7.3z" />
          </svg>
          <h3 className="text-base font-bold line-clamp-1 text-ui-text-title group-hover:text-white duration-200 transition-colors">
            {component?.title}
          </h3>
        </div>
        {component?.overview && (
          <p className="text-sm mt-2 line-clamp-3 text-ui-text-body group-hover:text-white duration-200 transition-colors">
            {component?.overview}
          </p>
        )}
      </a>
    </li>
  );
};

export default ComponentCard;

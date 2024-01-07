interface AspectProsp {
  classes: string;
  children: React.ReactNode;
}

const Aspect: React.FC<AspectProsp> = ({ classes, children }) => {
  return (
    <div
      className={
        "w-full relative after:block after:content[''] after:pb-[56.25%] " +
        classes
      }
    >
      <div className="absolute inset-0">{children}</div>
    </div>
  );
};

export default Aspect;

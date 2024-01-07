interface H2Props {
  children: React.ReactNode;
}

const H2: React.FC<H2Props> = ({ children }) => {
  return <h2 className="text-2xl font-bold text-ui-text-title">{children}</h2>;
};

export default H2;

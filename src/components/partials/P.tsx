interface PProps {
  children: React.ReactNode;
}

const P: React.FC<PProps> = ({ children }) => {
  return <p className="text-base font-normal text-ui-text-body">{children}</p>;
};

export default P;

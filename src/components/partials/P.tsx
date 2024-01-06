interface PProps {
  children: React.ReactNode;
}

const P: React.FC<PProps> = ({ children }) => {
  return <p className="text-base font-normal text-gray-500">{children}</p>;
};

export default P;

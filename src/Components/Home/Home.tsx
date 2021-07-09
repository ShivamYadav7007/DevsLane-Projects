import React from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  path: string;
}

const Home: React.FC<Props> = ({ path, title }) => {
  return (
    <div className="mt-10 text-center">
      <Link
        className="text-xl font-bold text-blue-600 hover:underline"
        to={path}
      >
        {title}
      </Link>
    </div>
  );
};

Home.defaultProps = {};

export default React.memo(Home);

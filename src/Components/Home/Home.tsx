import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="mt-20 text-center">
      <Link
        className="text-2xl font-bold text-blue-600 hover:underline"
        to="/dialog"
      >
        Confirmation Dialog Page
      </Link>
    </div>
  );
};

Home.defaultProps = {};

export default React.memo(Home);

import React from "react";

interface Props {
  clickFunction: () => void;
  buttonText: string;
  className?: string;
}

const Button: React.FC<Props> = ({ clickFunction, buttonText, className }) => {
  return (
    <button
      className={`px-10 py-3 text-sm focus:outline-none border rounded-md  ${className}`}
      onClick={clickFunction}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  className: "text-black bg-green-500",
};

export default React.memo(Button);

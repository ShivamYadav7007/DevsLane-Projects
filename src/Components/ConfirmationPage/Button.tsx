import React from "react";

interface Props {
  close: () => void;
  buttonText: string;
  className?: string;
}

const Button: React.FC<Props> = ({ close, buttonText, className }) => {
  return (
    <button
      className={`px-10 py-3 text-sm focus:outline-none text-white border rounded-md  ${className}`}
      onClick={close}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {};

export default React.memo(Button);

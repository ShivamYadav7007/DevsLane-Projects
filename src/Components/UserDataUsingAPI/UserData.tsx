import React from "react";

interface Props {
  name: any;
  email: string;
  gender: string;
}

const UserData: React.FC<Props> = ({ name, email, gender }) => {
  return (
    <tr className="italic">
      <td className="border">{name.first}</td>
      <td className="border">{email}</td>
      <td className="uppercase border">{gender}</td>
    </tr>
  );
};

UserData.defaultProps = {};

export default React.memo(UserData);

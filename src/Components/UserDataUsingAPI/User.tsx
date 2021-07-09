import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "../ConfirmationPage/Button";
import UserData from "./UserData";

interface Props {}

const User: React.FC<Props> = (props) => {
  const [userData, setUserData] = useState<any>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("Axios is getting response, Data fetching in progress!!\n");
    try {
      axios
        .get(
          `https://randomuser.me/api/?page=${pageNumber}&results=10&seed=abc`
        )
        .then((response) => {
          console.log("Data Fetched");
          console.log(response.data.results);

          setUserData(response.data.results);
          setIsLoading(false);
        });
    } catch (error) {
      console.log(`Getting error: ${error}`);
    }
  }, [pageNumber]);

  return (
    <div className="pt-10 text-center">
      {isLoading ? (
        "loading..."
      ) : (
        <div>
          <table width="300" cellPadding="10" className="px-5 mx-auto">
            <tr>
              <th className="border">
                <strong>Name</strong>
              </th>
              <th className="border">
                <strong>Email</strong>
              </th>
              <th className="border">
                <strong>Gender</strong>
              </th>
            </tr>
            {userData.map((item: any, index: number) => (
              <UserData
                key={index}
                name={item.name}
                email={item.email}
                gender={item.gender}
              />
            ))}
          </table>
          <div className="py-10 space-x-5 text-center">
            <Button
              buttonText="Previous"
              clickFunction={() => {
                setPageNumber(pageNumber <= 1 ? 0 : pageNumber - 1);
                console.log("button previous pressed");
                setIsLoading(true);
              }}
              className="text-white bg-red-500"
            />
            <Button
              buttonText="Next"
              clickFunction={() => {
                setPageNumber(pageNumber + 1);
                console.log("button next pressed");
                setIsLoading(true);
              }}
              className="bg-green-500 "
            />
          </div>
        </div>
      )}
    </div>
  );
};

User.defaultProps = {};

export default React.memo(User);

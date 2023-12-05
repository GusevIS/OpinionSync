import Card from "../UI/card";
import PrimaryButtons from "./buttons/primaryButton";
import React from "react";

const Account = () => {
  return (
    <Card>
      <div className="flex items-center flex-col">
        <div S>
          <h2 className="default-text">Welcome User!</h2>
        </div>

        <div className="mt-4 w-48 h-44">
          <img
            src="https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg"
            alt="person"
            className="m-0"
          />
        </div>

        <div className="flex flex-col gap-1">
          <p className="default-text text-center">
            Username
          </p>
          <p className="default-text text-center">
            Email
          </p>

        </div>
        <div className="mt-3 flex flex-row gap-2">
          <PrimaryButtons buttonText="Change name" customWidth="244px" customHeight="64px">
            {}
          </PrimaryButtons>
          <PrimaryButtons buttonText="Change email" customWidth="244px" customHeight="64px">
            {}
          </PrimaryButtons>
        </div>
      </div>
    </Card>
  );
};

export default Account;

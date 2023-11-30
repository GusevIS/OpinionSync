import Button from "../UI/button";
import Card from "../UI/card";

const Account = () => {
  return (
    <Card>
      <div className="flex items-center flex-col">
        <div S>
          <h2>Welcome User!</h2>
        </div>

        <div className="mt-4 w-48 h-44">
          <img
            src="https://icon-library.com/images/blank-person-icon/blank-person-icon-7.jpg"
            alt="person"
            className="m-0"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Button className="w-52">User email</Button>
          <Button className="w-52">Username</Button>
        </div>
        <div className="mt-3 flex flex-row gap-2">
          <Button to="" className="w-40">
            Change email
          </Button>
          <Button to="" className="w-29">
            Change password
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Account;

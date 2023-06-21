import { useState } from "react";
import Input from "../components/Input";

const Career = () => {
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="w-full bg-white p-12 flex  ">
      
      <div className="basis-1/2">
        <div className="w-3/4 mx-auto  shadow-md scale-1 rounded-lg p-4">
          <p className="font-semibold text-[#07425b] text-center text-xl">
            Register for career opportunities
          </p>
          <form className="w-full space-y-6">
            <div className="flex flex-col">
              <label>User Name</label>
              <Input
                type={"text"}
                name={"fname"}
                onChange={handleChange}
                placeholder={"First Name"}
                value={formData.fname}
              />
            </div>
            <div className="flex flex-col">
              <label>Email</label>
              <Input
                type={"email"}
                name={"email"}
                onChange={handleChange}
                placeholder={"Email"}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col">
              <label>Nationality</label>
              <Input
                type={"text"}
                name={"nationality"}
                onChange={handleChange}
                placeholder={"Nationality"}
                value={formData.nationality}
              />
            </div>
            <div className="flex flex-col">
              <p>Field</p>
              <select
                className="w-full p-2 rounded-lg "
                name="field"
                value={formData.field}
                onChange={handleChange}
              >
                <option
                  className="p-2 rounded-lg bg-white text-black"
                  value={""}
                >
                  Select Role
                </option>
                <option
                  className="p-2 rounded-lg bg-white text-black"
                  value={"Teller"}
                >
                  TELLER
                </option>
                <option
                  className="p-2 rounded-lg bg-white text-black"
                  value={"Vip lounge"}
                >
                  VIP LOUNGE
                </option>
                <option
                  className="p-2 rounded-lg bg-white text-black"
                  value={"Secretary"}
                >
                  SECRETARY
                </option>
              </select>
            </div>
            <div className="w-full flex justify-center">
              <button className=" w-1/2 bg-[#07425b] px-4 py-3 rounded-lg text-white">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Career;

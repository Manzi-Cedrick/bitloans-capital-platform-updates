import { useState, useEffect } from "react";
import { clients } from "../data";
import Buttons from "../components/Buttons";

const Clients = () => {
  const [currentId, setCurrentId] = useState(1);
  const showDetails = (id) => {
    setCurrentId(id);
  };
  const [data, setData] = useState(clients[1]);
  useEffect(() => {
    setData(clients[currentId - 1]);
  }, [currentId]);
  return (
    <div className="bg-white pb-12">
      <div className="w-full flex flex-col px-20 md:flex-row md:px-2">
        {/* clients display */}
        <div className="basis-1/4 pl-4 space-y-8">
          <h3 className="pt-4 text-[#07425b] font-semibold">Clients</h3>
          {/* available clients */}
          <div className="space-y-2 ">
            {clients.map((client, index) => {
              return (
                <div
                  key={client.id}
                  onClick={() => showDetails(client.id)}
                  className="bg-slate-100 py-2 hover:cursor-pointer hover:bg-slate-200 flex items-center pt-4 pl-8"
                >
                  <p className="font-semibold">{client.name}</p>
                </div>
              );
            })}
          </div>
          {/* Single Client details */}
        </div>
        <div className="basis-3/4 shadow-md shadow-slate-100 px-10 lg:px-14 ">
          <div className=" w-full border-b-2 gap-2 flex py-4 ">
            <Buttons
              text={"Copy Profile"}
              className={"text-white bg-[#07425b] p-2 px-4 rounded-lg"}
            />
            <Buttons
              text={"Reset Profile"}
              className={
                "text-[#07425b] bg-white border-2 border-[#07425b] py-2 px-3 rounded-lg"
              }
            />
          </div>
          <div className=" w-4/5 ">
            <div className="w-full flex md:justify-between lg:flex-row flex-col justify-start lg:items-center py-8">
              <div className="lg:basis-1/2 w-full">
                <h4>Profile</h4>
                <div className="w-full flex items-center gap-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                    <img
                      src={data.imgUrl}
                      alt="profile img"
                      width={60}
                      className="rounded-full w-12 h-12"
                    />
                  </div>
                  <div className="flex justify-between w-full items-center">
                    <div className="flex flex-col">
                      <span className="font-semibold inline-flex gap-2">
                        Name:
                        <span className="font-medium">{data.name}</span>
                      </span>
                      <span className="font-semibold inline-flex gap-2">
                        Address:
                        <span className="font-medium">{data.location}</span>
                      </span>
                    </div>
                    <div className="flex items-baseline gap-12">
                      <button className="border-2 px-4 py-2 border-[#07425b] rounded-lg text-black">
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
                <p className="gap-4 flex">
                  <span className="font-semibold">TOTAL BALANCE:</span>
                  {data.amount}
                </p>
                <p className="gap-4 flex">
                  <span className="font-semibold">TOTAL LENT:</span>
                  {data.lent}
                </p>
                <p className="gap-4 flex">
                  <span className="font-semibold">TOTAL LOAN:</span>
                  {data.loan}
                </p>
              </div>
              <div>
                <p className="gap-4 flex">
                  <span className="font-semibold">CLIENT INFO:</span>
                  {data.loan}
                </p>
                <p className="gap-4 flex">
                  <span className="font-semibold">CLIENT EMAIL:</span>
                  {data.email}
                </p>
                <p className="gap-4 flex">
                  <span className="font-semibold">CLIENT AGE:</span>
                  {data.age}
                </p>
                <p className="gap-4 flex">
                  <span className="font-semibold">CLIENT GENDER:</span>
                  {data.gender}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Clients;

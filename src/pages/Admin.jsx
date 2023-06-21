import { useState, useEffect } from "react";

const Admin = () => {
  const [ActiveId, setActiveId] = useState(1);
  const clients = [
    {
        id: 1,
        name: "John Doe",
        location: "USA",
        amount: "435USD",
        email: "johndoe@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 25,
        gender: "male",
        imgUrl: "/assets/Seated.jpg"
    },
    {
        id: 2,
        name: "Jane Smith",
        location: "Canada",
        amount: "435USD",
        email: "janesmith@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 30,
        gender: "female",
        imgUrl: "/assets/Baby.jpg"
    },
    {
        id: 3,
        name: "Mark Johnson",
        location: "USA",
        amount: "435USD",
        email: "markjohnson@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 35,
        gender: "male",
        imgUrl: "/assets/Baby.jpg"
    },
    {
        id: 4,
        name: "Emily Davis",
        location: "Canada",
        amount: "435USD",
        email: "emilydavis@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 28,
        gender: "female",
        imgUrl: "/assets/Baby.jpg"
    },
    {
        id: 5,
        name: "Michael Brown",
        location: "USA",
        amount: "435USD",
        email: "michaelbrown@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 32,
        gender: "male",
        imgUrl: "/assets/Baby.jpg"
    },
    {
        id: 6,
        name: "Sarah Wilson",
        location: "Canada",
        amount: "435USD",
        email: "sarahwilson@example.com",
        loan: "400USD",
        lent: "508USD",
        age: 27,
        gender: "female",
        imgUrl: "/assets/Baby.jpg"
    },
];

  const showDetails = (id) => {
    setActiveId(id);
  };
  const [data, setData] = useState(clients[1]);
  useEffect(() => {
    setData(clients[ActiveId - 1]);
  }, [ActiveId]);
  
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
                  className="bg-gray-200 focus:bg-slate-300 pt-4 hover:cursor-pointer hover:bg-slate-200 flex items-center  pl-8"
                >
                  <p className="font-semibold">{client.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="basis-3/4 border-2 border-slate-100 px-10 lg:px-14 ">
          <div className=" w-4/5 ">
            <div className="w-full flex md:justify-between flex-col justify-start py-8">
              <div className="lg:basis-1/2 w-full">
                <h4>Profile</h4>
                <div className="w-full flex flex-col items-center gap-8">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-md">
                    <img
                      src={data.imgUrl}
                      alt="profile img"
                      width={60}
                      className="rounded-full object-cover w-full h-full"
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
export default Admin;

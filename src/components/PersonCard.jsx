const PersonCard = ({ profileImg, name, title, biography }) => {
  return (
    <div className="px-4 py-6 bg-white shadow-sm shadow-[#07425b] rounded-lg w-full space-y-4">
      <div className="flex flex-row mx-auto gap-4">
        <div className="flex justify-center">
          <img
            src={profileImg}
            className="w-12 h-12 rounded-full"
            alt="profile"
          />
        </div>
        <div className="flex flex-col">
          <h4 className="">{name}</h4>
          <h3 className=" text-lg text-[#07425b] font-semibold">
            {title}
          </h3>
        </div>
      </div>
      <p>{biography.substr(0, 198)}</p>
    </div>
  );
};
export default PersonCard;

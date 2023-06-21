const PersonCard = ({ profileImg, name, title, biography }) => {
    return (
        <div className="card1 bg-white shadow-sm shadow-[#07425b] rounded-lg w-full space-y-4">
            <div className="flex justify-center">
                <img src={profileImg} className="w-40 h-40 rounded-full" alt="profile" />
            </div>
            <h4 className="text-center">{name}</h4>
            <h3 className="text-center text-lg text-[#07425b] font-semibold">{title}</h3>
            <p className="p-4">{biography.substr(0,198)}</p>
        </div>
    )

}
export default PersonCard;
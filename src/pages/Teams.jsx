import PersonCard from "../components/PersonCard";
import { teams } from "../data";

const Teams = () => {
    return (
        <div className="w-full bg-white space-y-12">
            <p className="text-center text-[#07425b] my-12">MEET OUR CREATIVE TEAM</p>
            <div className="w-3/4 grid grid-cols-3 mx-auto gap-4 pb-12">
                {teams.map((team) => {
                    return (
                        <PersonCard key={team.id} profileImg={team.img} name={team.name} title={team.title} biography={team.biography} />
                    )
                })}
            </div>
        </div>
    )
}
export default Teams;
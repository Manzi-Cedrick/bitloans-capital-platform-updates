import PersonCard from "../components/PersonCard";


const Teams = () => {
    const teams = [
        {
            id: 1,
            img: "/assets/Seated.jpg",
            name: "John Doe",
            title: "HR Manager",
            biography: "John Doe is an experienced HR professional with a proven track record in managing human resources effectively. With a passion for building strong teams and fostering a positive work environment, John is dedicated to ensuring the success and well-being of employees within the organization."
        },
        {
            id: 2,
            img: "/assets/reg.jpg",
            name: "Jane Smith",
            title: "Executive Secretary",
            biography: "Jane Smith brings a wealth of administrative expertise to her role as an Executive Secretary. With exceptional organizational skills and attention to detail, she supports senior executives in managing their daily tasks and maintaining smooth operations. Jane is known for her professionalism and ability to handle complex situations with ease."
        },
        {
            id: 3,
            img: "/assets/return.jpg",
            name: "Mark Johnson",
            title: "CEO",
            biography: "Mark Johnson is a visionary leader with a deep understanding of business operations. As the CEO of the company, he is responsible for driving strategic growth and ensuring the organization's success. With a passion for innovation and a focus on building strong relationships with stakeholders, Mark is dedicated to leading the company to new heights of success."
        },
        {
            id: 4,
            img: "/assets/Baby.jpg",
            name: "Emily Davis",
            title: "Teller 1",
            biography: "Emily Davis is a skilled and customer-focused professional with expertise in banking operations. As a Teller 1, she provides excellent service to customers, handling their transactions accurately and efficiently. Emily's friendly demeanor and strong problem-solving skills make her a valuable asset to the team."
        },
        {
            id: 5,
            img: "/assets/stream.jpg",
            name: "Michael Brown",
            title: "VIP Lounge",
            biography: "Michael Brown is dedicated to providing exceptional service to VIP clients. With extensive knowledge of customer preferences and a commitment to personalized experiences, he ensures that VIP clients receive the highest level of attention and satisfaction. Michael's attention to detail and professionalism make him a trusted partner for VIP clients."
        },
        {
            id: 6,
            img: "/assets/support.jpg",
            name: "Sarah Wilson",
            title: "Teller 2",
            biography: "Sarah Wilson is a reliable and detail-oriented professional with a passion for providing excellent customer service. As a Teller 2, she assists customers with their banking needs, offering guidance and support. Sarah's friendly approach and strong communication skills create a positive banking experience for customers."
        },
    ];
    
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

import { Link } from "react-router-dom";
import Navbar from "../../component/user/Navbar";

// src/data/teamData.js
export const teamMembers = [
  {
    id: "avinash-ravilla",
    name: "Avinash Ravilla D.O.",
    title: "Medical Director, Emergency Medicine Physician",
    bio: "Dr. Avinash is a board-certified Emergency Medicine physician with over 15 years of experience.",
    image: "https://i.pravatar.cc/300?img=1",
    location: "New York, USA",
    education: "Harvard Medical School",
    specialty: "Emergency Care, Critical Response",
    linkedin: "#",
  },
  {
    id: "maria-pena",
    name: "Maria Pena M.D.",
    title: "Specialty Medical Director, Endocrinology",
    bio: "Dr. Maria specializes in endocrinology with a focus on hormonal imbalance treatments.",
    image: "https://i.pravatar.cc/300?img=2",
    location: "San Francisco, USA",
    education: "Stanford University",
    specialty: "Endocrinology, Hormonal Therapy",
    linkedin: "#",
  },
  {
    id: "linda-roller",
    name: "Linda Roller R.N.",
    title: "Certified Diabetes Care and Education Specialist",
    bio: "Linda provides compassionate care and education to patients with diabetes.",
    image: "https://i.pravatar.cc/300?img=3",
    location: "Chicago, USA",
    education: "Johns Hopkins University",
    specialty: "Diabetes Education",
    linkedin: "#",
  },
];

const Team = () => {
  return (
    <>

      <Navbar />
      <div className="container mt-2 py-5">
        <h2 className="text-center fw-bold mb-4">Our Care Team</h2>
        <div className="row">
          {teamMembers.map((member) => (
            <div className="col-md-4 mb-4" key={member.id}>
              <div className="card h-100 shadow-sm">
                <img
                  src={member.image}
                  className="card-img-top"
                  alt={member.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{member.name}</h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>
                    {member.title}
                  </p>
                  <Link
                    to={`/team/${member.id}`}
                    className="btn btn-outline-dark"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;

import React from "react";
import { useParams, Link } from "react-router-dom";
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

const MemberProfile = () => {
  const { id } = useParams();
  const member = teamMembers.find((m) => m.id === id);

  if (!member) return <h2 className="text-center mt-5">Member not found</h2>;

  return (
    <>
      <Navbar />
      <div className="container py-5">
        <Link to="/team" className="btn btn-sm btn-secondary mb-4">
          ← Back to Team
        </Link>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-md-8">
            <h2>{member.name}</h2>
            <h5 className="text-muted mb-3">{member.title}</h5>
            <p>
              <strong>Bio:</strong> {member.bio}
            </p>
            <p>
              <strong>Education:</strong> {member.education}
            </p>
            <p>
              <strong>Specialty:</strong> {member.specialty}
            </p>
            <p>
              <strong>Location:</strong> {member.location}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberProfile;

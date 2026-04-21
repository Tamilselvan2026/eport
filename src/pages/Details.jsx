export default function Details(){
  const sectionStyle = {
    padding: "20px 20px",
    background: "#fff",
    minHeight: "20vh",
    width: "100%",
    heigth: "100%"
  };

  const cardStyle = {
    background: "#fff",
    padding: "20px ",
    margin: "20px 0",
    borderRadius: "12px",
    boxShadow: "10px 4px 10px 1px rgba(0,0,0,0.1)"
  };

  const titleStyle = {
    marginBottom: "10px",
    color: "#3852B4"
  };

  return (
    <div style={sectionStyle}>
{/* 
      Personal Details
      <div style={cardStyle}>
        <h1 style={titleStyle}>Personal Details</h1>
        <p><strong>Name:</strong> Tamilselvan</p>
        <p><strong>Email:</strong> your@email.com</p>
        <p><strong>Phone:</strong> +91 XXXXX XXXXX</p>
        <p><strong>Location:</strong> Tamil Nadu, India</p>
      </div> */}

      {/* Experience */}
      <div style={cardStyle}>
        <h1 style={titleStyle}>Internship / Work Experience</h1>

        <div>
          <h3>Company Name</h3>
          <p>Role: Full Stack Developer Intern</p>
          <p>Duration: Jan 2025 – Mar 2025</p>
          <p>
            Worked on building web applications using React and Node.js,
            improved API performance, and collaborated with team members.
          </p>
        </div>

      </div>

    </div>
  );
}
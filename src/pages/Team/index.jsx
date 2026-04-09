import "./style.css";

const members = [
  { name: "Sarah", role: "Frontend Developer" },
  { name: "Ahmad", role: "UI Designer" },
  { name: "Taqi Rabbani", role: "Project Manager" },
];

export default function Team() {
  return (
    <div className="container team-page">
      <h2 className="text-center fw-bold">Our Team</h2>

      <div className="row mt-5">
        {members.map((m, i) => (
          <div key={i} className="col-md-4 mb-4">
            <div className="card team-card">
              <img
                src={`https://i.pravatar.cc/300?img=${i + 10}`}
                alt={m.name}
              />

              <div className="card-body text-center">
                <h5>{m.name}</h5>
                <p className="text-muted">{m.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
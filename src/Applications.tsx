import "./styles/applications.css";
import "./styles/index.css";

const statuses = ["approved", "pending", "rejected"];

export function Applications() {
  const applications = new Array(10).fill(null).map((_) => ({
    status: statuses[Math.floor(Math.random() * statuses.length)],
  }));

  return (
    <div>
      <h2 className="text-xl mb-4">All applications ({applications.length})</h2>
      <div className="applications-container">
        <table className="table-auto">
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Metric</th>
              <th>Metric</th>
              <th>Metric</th>
              <th>Application Status</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((a, index) => (
              <tr className={index % 2 === 0 ? "even" : "odd"} key={index}>
                <td>Project Name</td>
                <td>Metric</td>
                <td>Metric</td>
                <td>Metric</td>
                <td>
                  <span className={`badge ${a.status}`}>{a.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

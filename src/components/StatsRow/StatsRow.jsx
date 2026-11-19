import './StatsRow.scss';
const StatsRow = ({ stats = [] }) => (
  <section className="qkr-stats">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-12 col-xl-12">
          <div className="row justify-content-center align-items-stretch text-center g-3">
            {stats.map((stat, index) => (
              <div
                key={stat.id}
                className={`col-lg col-6 col-md-4 stat-item ${index !== 0 ? 'stat-divider' : ''}`}
              >
                <div className="stat-item-box">
                  <div className="stat-value text-gradient fn-sb">{stat.value}</div>
                  <div className="stat-label text-muted">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default StatsRow;

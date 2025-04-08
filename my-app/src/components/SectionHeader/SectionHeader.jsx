import "./styles.css";
const SectionHeader = ({ title, subtitle }) => (
  <div className="section-header">
    <h1 className="section-header-title">{title}</h1>
    <p className="section-header-subtitle">{subtitle}</p>
  </div>
);
export default SectionHeader;

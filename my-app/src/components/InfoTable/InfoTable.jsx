import "./styles.css";
const InfoTable = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="2">
            <p>{data.infoHeading}</p>
          </th>
        </tr>
      </thead>
      <tbody>
        {data.infoItems.map((item, index) => (
          <tr key={index}>
            <td className="info-label-col">
              <p>{item.label}</p>
            </td>
            <td className="info-value-col">
              <p>{item.value}</p>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InfoTable;

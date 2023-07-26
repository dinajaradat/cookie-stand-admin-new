import { hours } from '../data';

export default function ReportTable(props) {
  if (props.reports.length === 0) {
    return (
      <h3 className="w-1/2 mx-auto my-8 text-2xl text-center"> No Cookie Stands Available </h3>
    );
  } else {
    let total_hours = 0;
    let total_time = 0;

    props.reports[0].hourly_sales.forEach((value) => {
      total_hours += value;
    });

    return (
      <table className="w-1/2 mx-auto my-8 text-2xl text-center border border-black">
        <thead>
          <tr>
            <th className="border border-black">Location</th>
            {hours.map((item) => (
              <th key={item} className="border border-black">
                {item}
              </th>
            ))}
            <th className="border border-black">Totals</th>
          </tr>
        </thead>
        <tbody>
          {props.reports.map((item) => (
            <tr key={item.location}>
              <td className="border border-black">{item.location}</td>

              {item.hourly_sales.map((sale, index) => (
                <td key={index} className="border border-black">
                  {sale}
                </td>
              ))}

              <td className="border border-black">{total_hours}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="border border-black"> Totals </th>
            {props.reports[0].hourly_sales.map((item, index) => {
              total_time += item * props.reports.length;
              return (
                <td key={index} className="border border-black">
                  {item * props.reports.length}
                </td>
              );
            })}
            <td className="border border-black">{total_time}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
import axios from "axios";
import React, { useEffect, useState } from "react";

const ViewForm = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    axios
      .get("https:anfaskaloor.online/feedback")
      .then((data) => setDatas(data?.data))
      .catch((err) => alert("Please try again"));
  }, []);
  return (
    <div className="table-view">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Institution</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Star</th>
          </tr>
        </thead>
        <tbody>
          {datas?.map((data) => {
            const startNum = data.star;
            return (
              <tr key={data.id}>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.institution}</td>
                <td>{data.phone}</td>
                <td>{data.message}</td>
                <td>
                  <div>
                    <i className={`${startNum >= 1 && "star"} fas fa-star`}></i>
                    <i className={`${startNum >= 2 && "star"} fas fa-star`}></i>
                    <i className={`${startNum >= 3 && "star"} fas fa-star`}></i>
                    <i className={`${startNum >= 4 && "star"} fas fa-star`}></i>
                    <i className={`${startNum >= 5 && "star"} fas fa-star`}></i>
                  </div>
                </td>
                {/* <td>{data.star} stars</td> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ViewForm;

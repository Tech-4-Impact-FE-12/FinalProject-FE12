import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { RiAddFill } from "react-icons/ri";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [activity, setActivity] = useState([]);
  

  useEffect(() => {
    (async () => {
      await getActivity();
    })();
  }, []);

  
  const getActivity = async () => {
    const response = await axios.get("https://be12-production.up.railway.app/AllKegiatan");
    setActivity(response?.data.data || []);
  };

  // const token = sessionStorage.getItem("token")
  const deleteActivity = async (_id) => {
  console.log("cek");
  
    try {
      const token = sessionStorage.getItem("token");
      await axios.delete(`https://be12-production.up.railway.app/kegiatan/delete/${_id}`, {headers:{Authorization: token}});
      getActivity();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="TitlePage d-flex justify-content-center"></div>
      <div className="activityContainer d-flex justify-content-center">
        <div className="card" style={{ width: "70rem", borderRadius: "20px", backgroundColor: "#ffff" }}>
          <div className="card-body">
            <div className="cardActivity d-flex justify-content-between">
              <div>
                <h4>List Activity</h4>
              </div>
              <div>
                <div>
                  <Link to="/AddActivity">
                    <button className="buttonActivity">
                      Add
                      <RiAddFill size={18} />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="tableActivity">
              <table className="table" style={{ borderRadius: "20px" }}>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Activity</th>
                    <th>Date</th>
                    <th className="text-end">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activity?.map((item, index) => (
                    <tr key={item._id}>
                      <td>{index + 1}</td>
                      <td>{item.judul_kegiatan}</td>
                      <td>{item.tgl_kegiatan}</td>
                      <td className="text-end">
                      <Link to={`/EditActivity/${item._id}`}>
                          <BiEdit size={24} color="#1B5457" className="actionButton" />
                        </Link>
                        <BiTrashAlt onClick={() => deleteActivity(item._id)} size={24} color="#CF2A2A" className="actionButton" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;

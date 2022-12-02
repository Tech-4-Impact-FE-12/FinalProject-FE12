import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Kegiatan.css";
import { Link } from "react-router-dom";

const Kegiatan = () => {
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




  return (
    <>
      <div className="bgActivity">
        <div className="TitlePage d-flex justify-content-center">
          <h3>Daftar Kegiatan</h3>
        </div>
        {activity?.map((item) => (
          <div className="cardContainer d-flex justify-content-center" key={item._id}>
            <div className="card" style={{ width: "70rem", borderRadius: "50px", backgroundColor: "#31878C" }}>
              <div className="card-body">
                <div className="row cardContent d-flex justify-content-between">
                  <div className="col-sm">
                    <img id="imgKegiatan" src="https://i.ibb.co/6rf0qGd/Images-Kegiatan.png" alt="imgKegiatan" />
                  </div>
                  <div className="col-sm leftContent text-end">
                    <h4 className="">{item.judul_kegiatan}</h4>
                    <div className="buttonKegiatan">
                    <Link to={`/detail/${item._id}`}>
                      <button className="buttonCard">Lihat Kegiatan</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Kegiatan;

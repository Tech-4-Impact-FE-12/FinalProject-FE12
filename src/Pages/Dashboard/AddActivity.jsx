import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { postKegiatan } from '../../Redux/Actions/kegiatanAction';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// import { postKegiatan } from './Redux/Actions/kegiatanAction';
import "./AddActivity.css";

function AddActivity() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [img_kegiatan, setImg] = useState("");
  const [judul_kegiatan, setJudul] = useState("");
  const [tgl_kegiatan, setTgl] = useState("");
  const [lokasi_kegiatan, setLokasi] = useState("");
  const [deskripsi, setDesc] = useState("");
  // const navigate = useNavigate();

  const data = {
    img_kegiatan : img_kegiatan,
    judul_kegiatan,
    tgl_kegiatan,
    lokasi_kegiatan,
    deskripsi
  }

  function reset() {
    setImg("")
    setDesc("")
    setJudul("")
    setLokasi("")
    setTgl ("")
  }


  function handlepostkegiatan(e) {
    e.preventDefault()
    const token = sessionStorage.getItem("token")
    dispatch(postKegiatan(data, token))
    Swal.fire({
      icon: "success",
      title: "Tambah Data Success",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard");
    reset()
  }
  


  return (
    <div className="bgFormAdd">
      <div className="containerCard d-flex justify-content-center">
        <div className="card" style={{ width: "40rem", borderRadius: "20px", backgroundColor: "#ffff" }}>
          <div className="titleAct d-flex justify-content-center">
            <div>
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669737831/MyNature/Bookmarks_un3edl.svg" alt="" />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <h3>Tambah Activity</h3>
          </div>

          <div className="formAdd d-flex justify-content-center">
          <form style={{ width: "30rem" }} onSubmit={handlepostkegiatan}>
              <div className="form-group">
                <label>Gambar Kegiatan</label>
                <input type="url" className="input form-control" value={img_kegiatan} onChange={(e) => setImg(e.target.value)} placeholder="Masukkan Link Gambar" />
              </div>
              <div className="form-group">
                <label>Judul Kegiatan</label>
                <input type="text" className="input form-control" value={judul_kegiatan} onChange={(e) => setJudul(e.target.value)} placeholder="Masukkan Judul Kegiatan" />
              </div>
              <div className="form-group">
                <label>Jadwal Kegiatan</label>
                <input type="date" className="input form-control" value={tgl_kegiatan} onChange={(e) => setTgl(e.target.value)} />
              </div>
              <div className="form-group">
                <label>Lokasi Kegiatan</label>
                <input type="text" className="input form-control" value={lokasi_kegiatan} onChange={(e) => setLokasi(e.target.value)} placeholder="Masukkan Kota Pelaksaaan" />
              </div>
              <div className="form-group">
                <label>Deksripsi Kegiatan</label>
                <textarea type="text" className="input form-control" value={deskripsi} onChange={(e) => setDesc(e.target.value)} placeholder="Masukkan Deskripsi Kegiatan" />
              </div>
              <div className="btnAddAct form-group">
                <button type="submit" className="btn btn-addAct">
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddActivity;

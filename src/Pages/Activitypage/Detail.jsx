import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Detail = () => {
  
  const dispatch = useDispatch()
  const [img_kegiatan, setImg] = useState("");
  const [judul_kegiatan, setJudul] = useState("");
  const [tgl_kegiatan, setTgl] = useState("");
  const [lokasi_kegiatan, setLokasi] = useState("");
  const [deskripsi, setDesc] = useState("");
  const { id } = useParams();
  // const navigate = useNavigate();



  useEffect(() => {
    (async () => {
    const response = await axios.get(`https://be12-production.up.railway.app/getKegiatan/${id}`)
    const selected = response?.data
    // console.log();
    setImg (selected.img_kegiatan)
    setDesc (selected.deskripsi)
    setLokasi (selected.lokasi_kegiatan)
    setTgl (selected.tgl_kegiatan)
    setJudul (selected.judul_kegiatan)

    })();
  }, []);


    return (
        <>
            <div key={id}>
                <div className="detailContent">
                    <div className="imgDetail">
                        <img src={img_kegiatan} alt="" />
                    </div>

                    <h3>{judul_kegiatan}</h3>
            
                    <div>
                        <p>{deskripsi}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail
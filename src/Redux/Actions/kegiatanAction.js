import axios from "axios";
export const GET_DATA = "GET_DATA";
export const FETCH_START = "FETCH_START";
export const SUCCESS_GET_DATA = "SUCCESS_GET_DATA";


function StartFetching() {
    return {
        type : FETCH_START
    }
}
function DoneFetchData(data) {
    return {
        type : SUCCESS_GET_DATA,
        payload : data.data
    }
}

// export const getKegiatan = () =>{
//     return async (dispatch) =>{
//         dispatch(StartFetching())
//         const res = await axios.get("https://be12-production.up.railway.app/AllKegiatan")
//         dispatch(DoneFetchData(res.data))
//     }
// }

export const getKegiatan = (data) =>{
    return async () =>{
        axios.post("https://be12-production.up.railway.app/AllKegiatan",data, {
        })
    }
}

export const postKegiatan = (data, token) =>{
    return async () =>{
        axios.post("https://be12-production.up.railway.app/Kegiatan/create",data, {
            headers: {
                Authorization: token
            }
        })
    }
}

export const editKegiatan = (id, data, token) =>{
    return async () =>{
        axios.put( `https://be12-production.up.railway.app/Kegiatan/update/${id}`,data, {
            headers: {
                Authorization: token
            }
        })
    }
}


export const deleteKegiatan = (data, token) => {
    return () =>{
        axios.post(`https://be12-production.up.railway.app/Kegiatan/delete/${_id}`,data, {
            headers: {
                Authorization: token
            }
        })
    }
}
import { FETCH_START,SUCCESS_GET_DATA} from "../Actions/kegiatanAction";

const init = {
    kegiatan : [],
    loading : false,
    err:null
}
function kegiatanReducer(state = init,action) {
    switch (action.type) {
        case FETCH_START:
            return {
                ...state,
                loading : true
            }
        case SUCCESS_GET_DATA:
            return{
                ...state,
                kegiatan : action.payload,
                loading : false
            }
        default:
            return state
    }
}
export default kegiatanReducer
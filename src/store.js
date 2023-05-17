import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import regisUserReducer from './slices/regisUserSlice';
import ticketSlice from './slices/ticketSlice';
import datveSlice from './slices/datVeSlice';
import infoUserSlice from './slices/infoUserSlice';
import danhSachPhimPhanTrangSlide from './slices/danhSachPhimPhanTrangSlide';

const store = configureStore({
    reducer:{
        user: userReducer,
        regisUser: regisUserReducer,
        ticket: ticketSlice,
        datve: datveSlice,
        infoUser: infoUserSlice,
        listMoviePage: danhSachPhimPhanTrangSlide,
    }
})

export default store;
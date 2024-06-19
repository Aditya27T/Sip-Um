import { select } from '@material-tailwind/react';
import axios from 'axios';

export const getLaporan = async (selectedType) => {
    const response = await axios.get(`http://localhost:5000/reports/${selectedType}`);
    console.log(response.data);
    return response.data;
}


export const trendings = async () => {
    return await axios.get('http://localhost:5000/reports/trending/sort');
}

export const getLaporanById = async (id) => {
    const response = await axios.get(`http://localhost:5000/reports/${id}`);
    console.log(response.data);
    return response.data;
}
import axios from "axios";

export const getLaporan = async (selectedType) => {
  return await axios.get(
    `http://localhost:5000/reports/category/${selectedType}`
  );
};
export const trendings = async () => {
  return await axios.get("http://localhost:5000/reports/trending/sort");
};

export const getLaporanById = async (id) => {
  const response = await axios.get(`http://localhost:5000/reports/${id}`);
  console.log(response.data);
  return response.data;
};

export function addDataProperty(
  id_user,
  title,
  location,
  status,
  category,
  description,
  image
) {
  const formData = new FormData();
  formData.append("id_user", id_user);
  formData.append("title", title);
  formData.append("location", location);
  formData.append("status", status);
  formData.append("category", category);
  formData.append("description", description);
  formData.append("image", image);
  return axios.post(`http://localhost:6570/api/reports/add`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "",
    },
  });
}

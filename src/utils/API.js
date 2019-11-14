import axios from "axios";

export default axios.create({
  baseURL: "https://watermp.herokuapp.com/",
  headers: {
    Authorization: `${localStorage.getItem("token")}`
  },
  responseType: "json"
});

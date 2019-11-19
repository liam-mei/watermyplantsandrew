import axios from "axios";

export function getToken() {
	return localStorage.getItem("token")
}

export default function() { 
  return axios.create({
  baseURL: "https://watermp.herokuapp.com/",
  headers: {
    Authorization: getToken()
  },
  responseType: "json"
})
}

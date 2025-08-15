import axios from "axios";

let instance=axios.create({
    baseURL:"https://practicebackend-aipa.onrender.com/",
    withCredentials:true
})

export default instance
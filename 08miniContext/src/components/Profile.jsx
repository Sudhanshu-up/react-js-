
import Usercontext from "../Context/UserContext";
import React,{useContext} from "react";




function Profile() {
    const {user}=useContext(Usercontext)
    if(!user) return <div> Login Please !</div>
    return <div> Welcome : {user.userName}</div>
}
export default Profile

import { useEffect } from "react";

function Users(){
    useEffect(()=>{
        console.log("Users component mounted");
    })
    return (
        <div>Users</div>
    )
}

export default Users;
import React from "react";
import Users from '../users/Users'
import UserSearch from "../users/UserSearch";
function Home() {
    return (
        <div>
            <UserSearch/>
            <Users/>
        </div>
    );
}

export default Home;

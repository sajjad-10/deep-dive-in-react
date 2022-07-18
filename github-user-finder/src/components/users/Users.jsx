import {  useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
function Users() {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;


    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <UserItem user={user} key={user.id} />
            ))}
        </div>
    );
}

export default Users;

import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
function Users() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_GITHUB_URL}/users`,
            {
                headers: {
                    Authorization: `token ${process.env.React_APP_GITHUB_TOKEN}`,
                },
            }
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
    };
    if (loading) {
        return <Spinner />;
    }
    return (
        <div className="grid grid-col-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
            {users.map((user) => (
                <UserItem user={user} key={user.id}/>
            ))}
        </div>
    );
}

export default Users;

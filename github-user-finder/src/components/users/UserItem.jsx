import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url, html_url } }) {
    return (
        <div className="card shadow-md compat side bg-base-100">
            <div className="flex-row items-center space-x-4 card-body">
                <div>
                    <div className="avatar">
                        <div className="rounded-full shadow w-14 h-14">
                            <img
                                src={avatar_url}
                                alt="Profile"
                                className="round-img"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="card-title">{login}</h2>
                    <Link
                        to={`/user/${login}`}
                        className="btn btn-dark btn-sm my-1"
                    >
                        More
                    </Link>
                </div>
            </div>
        </div>
    );
}
UserItem.propTypes = {
    user: PropTypes.object,
};

export default UserItem;

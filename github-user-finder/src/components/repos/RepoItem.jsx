import React from "react";
import PropTypes from "prop-types";
import { FaLink } from "react-icons/fa";


function RepoItem({ repo }) {
    return (
        <div className="mb-2 runded-md card bg-gray-800 hover:bg-gray-900">
            <div className="card-body">
                <div className="mb-2 text-xl font-semibold">
                    <a href={repo.html_url}><FaLink className="inline mr-1"/>{repo.name}</a>
                </div>
            </div>
        </div>
    );
}
RepoItem.propTypes = {
    repos: PropTypes.object.isRequired,
};
export default RepoItem;

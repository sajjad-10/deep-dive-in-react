import React, { useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
    const { alert } = useContext(AlertContext);
    return (
        alert !== null && (
            <p className="flex items-start mb-4 space-x-2">
                {/* {alert.type ==='error'&&(<>icon</>)} */}
                <span className="flex-1 text-base font-semibold leading-7 text-white">
                    <strong>{alert.msg}</strong>
                </span>
            </p>
        )
    );
}

export default Alert;

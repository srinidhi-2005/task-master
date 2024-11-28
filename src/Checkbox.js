import { useState } from "react";

export default function Checkbox({check = false, onClick}) {
    return (
        <div onClick={onClick}>
            {!check && (
                <div className="uncheckbox">
                    <i class="fa-regular fa-square"></i>
                </div>
            )}
            {check && (
                <div className="checkbox">
                    <i class="fa-solid fa-square-check"></i>
                </div>
            )}
        </div>
    );
}
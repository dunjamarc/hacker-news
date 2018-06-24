import React from "react";

const Comment = (props) => {

    const strip = (html) => {
       let tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    }

    return (
        <div className="comment">
            <span>{props.value.by}</span>
            <p>{strip(props.value.text)}</p>
        </div>
    )
}

export default Comment;
import React from "react";

const Comment = (props) => {

    const strip = (html) => {
       let tmp = document.createElement("DIV");
       tmp.innerHTML = html;
       return tmp.textContent || tmp.innerText || "";
    }

    return (
        <div className="comment">
            <p>{props.value.by}</p>
            <p>{strip(props.value.text)}</p>
        </div>
    )
}

export default Comment;
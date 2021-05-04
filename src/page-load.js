import {getIndexHtml} from "./get-index-html";
function pageLoad(){
    let content = document.getElementById("content");
    content.innerHTML = getIndexHtml();
    return content;
}

export {pageLoad};
import React from "react";


function APOD(props){
    return (
        <div>
            <b>API URL:</b>
            <pre id="reqObject"></pre>


            <img id="apod_img_id" width="250px" />

            <iframe id="apod_vid_id" type="text/html" width="640" height="385" frameborder="0"></iframe>
            <p id="copyright"></p>

            <h3 id="apod_title"></h3>
            <p id="apod_explaination"></p>
            <br />
            <b>Return Object:</b>
            <pre id="returnObject"></pre>
        </div>
    );
}

export default APOD;
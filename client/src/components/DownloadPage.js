import React from "react";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import './DownloadPage.scss';
function DownloadPage() {
  const history = useHistory();
  return (
    <div className="download" style={{
      overflow: "hidden"
     
    }}>
      <div className="download_item"             style={{
              paddingTop: "50vh",
              overflow: "hidden"
             
            }}>
      <Button
            variant="contained"
            className="landingpage_super_content_download"
            style={{
              color: "white",
              background: "#111B47",
              textTransform: "capitalize",
              marginLeft: "7vw",
              marginRight: "8vw",
              width:"175px"
            }}
            onClick={() => history.push("/download")}
          >
            Download
          </Button>
      <Button
            variant="contained"
            className="landingpage_super_content_download"
            style={{
              color: "white",
              background: "#111B47",
              textTransform: "capitalize",
              marginLeft: "9vw",
              marginRight: "7vw",
              width:"175px"
            }}
            onClick={() => history.push("/download")}
          >
            chrome://extensions/
          </Button>
      <Button
            variant="contained"
            className="landingpage_super_content_download"
            style={{
              color: "white",
              background: "#111B47",
              textTransform: "capitalize",
              marginLeft: "9vw",
              marginRight: "7vw",
              width:"175x"
            }}
            onClick={() => history.push("/download")}
          >
            “Load Unpacked”
          </Button>
      </div>
    </div>
  );
}

export default DownloadPage;

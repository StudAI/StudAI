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
              paddingTop: "48vh",
              overflow: "hidden"
             
            }}>
      <Button
            variant="contained"
            className="landingpage_super_content_download"
            style={{
              color: "black",
              background: "#111B47",
              textTransform: "capitalize",
              marginLeft: "7vw",
              marginRight: "9vw",
              width:"175px",
            }}

          >
            <a             style={{
              color: "white",
              textDecoration: "none"
            }}
                href="../../../extension.zip"
                download
              >
                Download
              </a>
          </Button>

      <Button
            variant="contained"
            className="landingpage_super_content_download"
            style={{
              color: "white",
              background: "#111B47",
              textTransform: "capitalize",
              marginLeft: "8vw",
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
              marginLeft: "7vw",
              marginRight: "6vw",
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

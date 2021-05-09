import React from "react";
import './DownloadPage.scss';

function DownloadPage() {
  return (
    <div className="download">
      <div className="download_item">
        <button className="download_button" style={{marginTop: '25vh'}}>Download</button>
      </div>
      <div className="download_item">
        <button className="download_button" style={{marginTop: '35vh'}}>chrome://extensions/</button>
      </div>
      <div className="download_item">
        <button className="download_button" style={{marginTop: '40vh'}}>“Load Unpacked”</button>
      </div>
    </div>
  );
}

export default DownloadPage;

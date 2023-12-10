import React from "react";
import '../assets/css/loading.css';

export default function Loader() {
  return (
    <div className="preloader-wrapper big active loading">
      <div className="spinner-layer spinner-teal-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

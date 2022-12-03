import React from "react";

export default function Popup({ setPopup, movie }) {
  return (
    <div>
      <div className="modal">
        <iframe
          width="960"
          height="715"
          src={movie.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="modal-buttons">
          <button
            onClick={() => setPopup(false)}
            className="btn text-lg border-l bg-slate-100 btn-cancel"
          >
            Close
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  );
}

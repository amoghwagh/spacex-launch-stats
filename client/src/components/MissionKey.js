import React from "react";

export default function MissionKey() {
  return (
    <div className="my-3" style={{ fontSize: 20 }}>
      <p>
        <span className="px-4 mr-2 bg-success" /> = Success
      </p>
      <p>
        <span className="px-4 mr-2 bg-danger" /> = Fail
      </p>
    </div>
  );
}

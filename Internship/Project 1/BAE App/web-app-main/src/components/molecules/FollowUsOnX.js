import React from "react";

const FollowUsOnX = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        position: "absolute",
        right: 32,
        top: 32,
        color: "#fff",
        padding: "8px 16px",
        border: "2px solid #6338D3",
        borderBottomWidth: "3px",
        borderRadius: "16px",
        cursor: "pointer",
      }}
      onClick={() => window.open("https://twitter.com/baeappai/", "_blank")}
    >
      Follow us on
      <img src="/assets/images/x.png" />
    </div>
  );
};

export default FollowUsOnX;

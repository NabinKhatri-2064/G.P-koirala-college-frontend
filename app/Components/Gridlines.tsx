import React from "react";

const Gridline = () => {
  return (
    <div className="absolute inset-0 pointer-events-none -z-40 opacity-70">
      {/* Horizontal Lines */}
      <div className="absolute top-[12.5%] left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="absolute top-[25%] left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

      <div className="absolute top-[37.5%] left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="absolute top-[50%] left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="absolute top-[62.5%] left-0 w-full h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="absolute top-[75%] left-0 w-full h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent" />

      {/* Vertical Lines */}
      <div className="absolute left-[12.5%] top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500/20 to-transparent" />

      <div className="absolute left-[25%] top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500/20 to-transparent" />

      <div className="absolute left-[37.5%] top-0 h-full w-px bg-linear-to-b from-transparent via-blue-500/20 to-transparent" />

      <div className="absolute left-[50%] top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500/30 to-transparent" />

      <div className="absolute left-[62.5%] top-0 h-full w-px bg-linear-to-b from-transparent via-blue-500/20 to-transparent" />

      <div className="absolute left-[75%] top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500/20 to-transparent" />

      <div className="absolute left-[87.5%] top-0 h-full w-px bg-linear-to-b from-transparent via-purple-500/30 to-transparent" />
    </div>
  );
};

export default Gridline;

import React from "react";

export const About = () => {
  let mystle = {
    minHeight: "90vh",
  };
  return (
    <div className="container text-center" style={mystle}>
      <div className="m-lg-4">
        <h2>This is About Page</h2>
        <p>This app is of simple react based To Do List web app</p>
      </div>
    </div>
  );
};

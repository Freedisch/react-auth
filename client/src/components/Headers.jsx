import React, { useEffect, useState } from "react";

export default function Headers() {
  return (
    <nav className="navbar bg-body-tertiary">
      <form className="container-fluid justify-content-start">
        <button className="btn btn-outline-success me-2" type="button">
          Log In
        </button>
        <button className="btn btn-sm btn-outline-secondary" type="button">
          Log Out
        </button>
      </form>
    </nav>
  );
}

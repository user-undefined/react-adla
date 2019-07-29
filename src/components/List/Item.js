import React from "react";

export default function({ key, children }) {
  return <li key={key}>{children}</li>;
}

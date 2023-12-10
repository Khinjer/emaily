import React from "react";

export default function SurveyField({
  input,
  label,
  meta: { error, touched },
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label className="teal-text" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{label}</label>
      <input {...input} />
      <span className="red-text">{touched && error}</span>
    </div>
  );
}

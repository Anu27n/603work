import React, { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    passType: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Shared input style
  const inputStyle = {
    display: "block",
    width: "100%",
    padding: "10px",
    margin: "8px 0 4px 0",
    backgroundColor: "black",
    color: "white",
    border: "1px solid #ffffff33",
    borderRadius: "6px",
    fontSize: "15px",
  };

  const errorText = {
    color: "#ff5555",
    fontSize: "13px",
    marginBottom: "10px",
  };

  /* Handle input updates */
  const handleChange = (e) => {
    const { name, value } = e.target;

    const cleanValue =
      name === "phone" || name === "email"
        ? value.trim().replace(/\s+/g, "")
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: cleanValue,
    }));

    validateField(name, cleanValue);
  };

  /*Validation Logic */
  const validateField = (name, value) => {
    let msg = "";

    if (name === "phone") {
      // 🌍 E.164 format
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      if (!value) msg = "Phone number is required.";
      else if (!phoneRegex.test(value))
        msg =
          "Enter a valid international number (e.g. +14155552671 or +447700900123).";
    }

    if (name === "email") {
      // valid emails only
      const emailRegex =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
      if (!value) msg = "Email address is required.";
      else if (!emailRegex.test(value))
        msg = "Enter a valid email address (e.g. user@example.com).";
    }

    setErrors((prev) => ({ ...prev, [name]: msg }));
  };

  /* Handle Form Submit */
  const handleSubmit = (e) => {
    e.preventDefault();

    Object.keys(formData).forEach((key) =>
      validateField(key, formData[key])
    );

    if (Object.values(errors).some((err) => err)) {
      alert("Please fix the highlighted errors before submitting.");
      return;
    }

    console.log("✅ Form Submitted:", formData);
    setSubmitted(true);
    alert("🎉 Booking submitted successfully!");
  };

  const isInvalid =
    errors.phone || errors.email || !formData.phone || !formData.email;

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "100%", textAlign: "center" }}>
        <h1
          style={{
            color: "yellow",
            fontSize: "28px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Book Your Workspace
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          maxWidth: "420px",
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#111",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Name */}
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Enter your full name"
          style={inputStyle}
        />

        {/* Phone */}
        <label htmlFor="phone">Phone Number:</label>
        <input
          id="phone"
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          placeholder="+14155552671"
          style={inputStyle}
        />
        {errors.phone && <p style={errorText}>{errors.phone}</p>}

        {/* Email */}
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="you@example.com"
          style={inputStyle}
        />
        {errors.email && <p style={errorText}>{errors.email}</p>}

        {/* Company */}
        <label htmlFor="company">Company Name (optional):</label>
        <input
          id="company"
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Your company name"
          style={inputStyle}
        />

        {/* Pass Type */}
        <label htmlFor="passType">Select Pass Type:</label>
        <select
          id="passType"
          name="passType"
          value={formData.passType}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">-- Choose a Pass Type --</option>
          <option value="Day Pass">Day Pass</option>
          <option value="Hot Desk">Hot Desk</option>
          <option value="Dedicated Desk">Dedicated Desk</option>
          <option value="Cabin Space">Cabin Space</option>
          <option value="Managed Office Solution">
            Managed Office Solution
          </option>
          <option value="Conference Room">Conference Room</option>
          <option value="Meeting Room">Meeting Room</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          disabled={isInvalid}
          style={{
            backgroundColor: isInvalid ? "gray" : "yellow",
            color: "black",
            padding: "12px 18px",
            border: "none",
            borderRadius: "6px",
            cursor: isInvalid ? "not-allowed" : "pointer",
            fontWeight: "bold",
            fontSize: "16px",
            width: "100%",
            marginTop: "10px",
            transition: "0.3s",
          }}
        >
          {submitted ? "✅ Submitted" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Book;

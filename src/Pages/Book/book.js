import React, { useState } from "react";

const Book = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    passType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        padding: "20px",
        height: "100vh",
      }}
    >
      <div>
        <button
          type="submit"
          style={{
            backgroundColor: "yellow",
            color: "black",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
            marginTop: "15px",
          }}
        >
          Specifications
        </button>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "auto" }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ffffff33",
            }}
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ffffff33",
            }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ffffff33",
            }}
          />
        </label>

        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ffffff33",
            }}
          />
        </label>

        <label>
          Pass Type:
          <select
            name="passType"
            value={formData.passType}
            onChange={handleChange}
            style={{
              display: "block",
              width: "100%",
              padding: "8px",
              margin: "10px 0",
              backgroundColor: "black",
              color: "white",
              border: "1px solid #ffffff33",
            }}
          >
            <option value="Day Pass">Day Pass</option>
            <option value="Hot Desk">Hot Desk</option>
            <option value="Dedicated Desk">Dedicated Desk</option>
            <option value="Cabin Space">Cabin Space</option>
            <option value="Managed Office Solution ">
              Managed Office Solution
            </option>
            <option value="Conference Room">Conference Room</option>
            <option value="Meeting Room">Meeting Room</option>
          </select>
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "yellow",
            color: "black",
            padding: "10px 15px",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            width: "100%",
            marginTop: "15px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Book;

import axios from "axios";
import React, { useState } from "react";

const RateForm = () => {
  const [star, setStar] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState("");

  const handleStar = (num) => {
    setStar(num);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      star: star,
      name: name,
      email: email,
      institution: institution,
      phone: phone,
      message: message,
    };

    // .post("http://54.90.234.200:3000/feedback", data)
    axios
      .post("https://anfaskaloor.online/feedback", data)
      .then((response) => {
        alert("Thank for your feedback");
        console.log(response);
        setStar(0);
        setName("");
        setEmail("");
        setInstitution("");
        setPhone(null);
        setMessage("");
      })
      .catch((error) => alert("Please try again"));
  };

  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <div className="container img">
      <img src="img/shape.png" className="square" alt="" />
      <div className="form">
        <div className="contact-info">
          <div className="post">
            <div className="text">Thanks for rating us!</div>
          </div>
          <div className="star-widget">
            <input
              type="radio"
              onClick={() => handleStar(5)}
              name="rate"
              id="rate-5"
            />
            <label for="rate-5" className="fas fa-star"></label>
            <input
              type="radio"
              onClick={() => handleStar(4)}
              name="rate"
              id="rate-4"
            />
            <label for="rate-4" className="fas fa-star"></label>
            <input
              type="radio"
              onClick={() => handleStar(3)}
              name="rate"
              id="rate-3"
            />
            <label for="rate-3" className="fas fa-star"></label>
            <input
              type="radio"
              onClick={() => handleStar(2)}
              name="rate"
              id="rate-2"
            />
            <label for="rate-2" className="fas fa-star"></label>
            <input
              type="radio"
              onClick={() => handleStar(1)}
              name="rate"
              id="rate-1"
            />
            <label for="rate-1" className="fas fa-star"></label>
            <form className="review-form" action="#">
              <header></header>
            </form>
          </div>
        </div>

        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>

          <form action="" autoComplete="off">
            <h3 className="title">Feedback</h3>
            <div className="input-container">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="name"
                className="input"
              />
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                className="input"
              />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container">
              <input
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                type="institution"
                name="institution"
                className="input"
              />
              <label for="">institution</label>
              <span>institution</span>
            </div>
            <div className="input-container">
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                type="tel"
                name="phone"
                className="input"
              />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container textarea">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                className="input"
              ></textarea>
              <label for="">Message</label>
              <span>Message</span>
            </div>
            <button onClick={handleSubmit} className="btn">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RateForm;

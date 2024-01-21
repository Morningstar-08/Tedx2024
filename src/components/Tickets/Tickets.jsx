import "./Tickets.css";

export default function Tickets() {
  function Submit(e) {
    const formElement = document.getElementById("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbzMSO6RZKJ-bQew9nrYHQ87eFfI5v8BS88viVwgbKQqHfxmGg2IXvIxf1IwnJ137ZTxPQ/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Thank you for registering for the event!");
      })
      .catch((error) => {
        console.log(error);
        alert("Error! Please contact the core.");
      });
  }

  return (
    <div className="tickets">
      <div className="ticket-wrap">
        <div className="img-wrap">
          <img className="vip-ticket" src="./Main_day_Ticket_VIP.png" alt="" />
          <img
            className="general-ticket"
            src="./Main_day_Ticket_Attendee.png"
            alt=""
          />
        </div>

        <form
          onSubmit={(e) => {
            Submit(e);
          }}
          id="form"
          className="form"
        >
          <div>
            <div className="heading">
              <h2 className=".abril-fatface-regular reghead">
                REGISTRATION FORM
              </h2>
            </div>
            <div className="input-box">
              <label htmlFor="name" className="labelline">
                Full Name
              </label>
              <input type="text" id="name" name="Name" required />
            </div>
            <div className="input-box">
              <label htmlFor="email" className="labelline">
                Email ID
              </label>
              <input type="email" name="Email" id="email" required />
            </div>
            <div className="input-box">
              <label htmlFor="contact" className="labelline">
                Contact No.
              </label>
              <input
                className="input-box"
                type="text"
                id="contact"
                name="Contact"
                required
              />
            </div>
            <div className="input-select">
              <select name="Ticket" id="">
                <option value="Select Ticket Type" selected disabled>
                  Select Ticket Type
                </option>
                <option value="General Ticket" name="Ticket" id="general">
                  General Ticket
                </option>
                <option value="VIP Ticket" name="Ticket" id="vip">
                  VIP Ticket
                </option>
              </select>
            </div>
            <div className="button-div">
              <button type="submit" className="button-24">
                <span>REGISTER NOW!</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

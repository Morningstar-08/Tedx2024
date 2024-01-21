import "./Tickets.css";

export default function Tickets() {
  function Submit(e) {
    const formElement = document.getElementById("form");
    e.preventDefault();
    const formData = new FormData(formElement);
    fetch(
      "https://script.google.com/macros/s/AKfycbxI8k5o22dFPDHQ8r6yNGm30dgSUCSKYBzlQ_W4VcgGtESNL6A0M8u5EdOjToxJa6WO9w/exec",
      {
        method: "POST",
        body: formData,
      }
    );
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
        >
          <div className="form">
            <h2 className=".abril-fatface-regular.abril-fatface-regular">
              REGISTRATION FORM
            </h2>
            <div className="input-box">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="Name" required />
            </div>
            <div className="input-box">
              <label htmlFor="email">Email ID</label>
              <input type="email" name="Email" id="email" required />
            </div>
            <div className="input-box">
              <label htmlFor="contact">Contact No.</label>
              <input
                className="input-box"
                type="text"
                id="contact"
                name="Contact"
                required
              />
            </div>
            <div className="input-checkbox">
              <label className="input-checkbox" htmlFor="general">
                General Ticket
              </label>
              <input
                type="checkbox"
                name="Ticket"
                id="general"
                value="General Ticket"
              />
            </div>
            <div className="input-checkbox">
              <label htmlFor="vip">VIP Ticket</label>
              <input
                className="input-checkbox"
                type="checkbox"
                name="Ticket"
                id="vip"
                value="VIP Ticket"
              />
            </div>
            {/* <input className="btn-6" type="submit" value="REGISTER NOW!" /> */}
            <button type="submit" className="btn-3">
              <span>REGISTER NOW!</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

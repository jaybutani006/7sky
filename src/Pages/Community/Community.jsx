import React from "react";
import "../pages.css";

import Download from "../../Components/Download/Download";

const Community = () => {
  return (
    <>
      <div className="container__wrapper">
        <span>Home &gt; Community Guidelines</span>
        <div className="container">
          <h2>Community Guidelines</h2>
          <p>
            We at Betterhalf have strived to take all possible steps to build a
            safe online community. We advise all our users to follow the
            guidelines to stay safe during your Betterhalf experience.
          </p>

          <h3 className="container__heading">Online Safety</h3>
          <h3>Safeguard your information</h3>
          <p>
            Never share personal information, such as your home or work address,
            or details about your daily routine (e.g., that you go to a certain
            gym every Monday) with people you don’t know.
          </p>
          <h3>Never Send Money or Share Financial Information</h3>
          <p>
            Never send money, especially over bank transfer, even if the person
            claims to be in an emergency. Transferring money is like sending
            cash — it’s nearly impossible to reverse the transaction or trace
            where the money went. Never share information that could be used to
            access your financial accounts. If another user asks you for money,
            report it to us immediately.
          </p>
          <h3 className="container__heading">Meeting in Person</h3>
          <h3>Take your time</h3>
          <p>
            Don’t be in a rush, get to know the other person before agreeing to
            meet or chat off Betterhalf. Don’t be afraid to ask questions to
            screen for any red flags. A phone or video call can be a useful
            screening tool.
          </p>
          <h3>Meet in Public</h3>
          <p>
            For the first few times meet in populated, public places. If your
            connection pressures you to go to a private location, end the date.
          </p>
          <h3>If You Feel Uncomfortable, Leave</h3>
          <p>
            It’s okay to end the date early if you’re feeling uncomfortable. In
            fact, it’s encouraged. And if your instincts are telling you
            something is off or you feel unsafe, ask people around you for help.
          </p>
        </div>
      </div>
      <Download />
    </>
  );
};

export default Community;

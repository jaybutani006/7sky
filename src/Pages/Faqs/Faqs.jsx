import React from "react";
import "../pages.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import downButton from "../../Assets/down.png";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { BASE_URL } from "../../BASE_URL";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    fetchFaqs();
  }, []);
  
  const fetchFaqs = async () => {
    // await axios
    //   .get("https://matrimonial-8jdx.onrender.com/api/FAQS")
    //   .then((res) => {
    //     setFaqs(res.data.data);
    //     console.log(res.data.data);
    //   })
    //   .catch((err) => console.log(err));
    const res = await fetch(`${BASE_URL}/api/FAQS`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setFaqs(data.data);
  };

  return (
    <div className="container__wrapper">
      <span>Home &gt; Frequently Asked Questions(FAQ)</span>

      <div className="container">
        <h2>Faqs</h2>
        <div className="accordions">
          {faqs.map((faq) => {
            return (
              <Accordion>
                <AccordionSummary
                  expandIcon={<img src={downButton} alt="" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h4 className="accordion_summary">{faq.questions}</h4>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p className="accordion_detais">{faq.answer}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faqs;

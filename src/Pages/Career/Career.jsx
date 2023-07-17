import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import React, { useState } from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import JobPositionCard from "../../Components/JobPositionCard/JobPositionCard";
import "./Career.css";

const Career = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="container__wrapper">
      <span>Home &gt; Career</span>
      <h2 className="open__positions">Open Positions</h2>
      <Box sx={{ width: "100%", padding: 0 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", gap: 6 }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              TabIndicatorProps={{
                sx: { backgroundColor: "rgba(207, 22, 111, 0.5)" },
              }}
              sx={{
                "& button": { fontFamily: "poppins" },
                "& button:active": { color: "rgba(207, 22, 111, 0.5)" },
                "& button.Mui-selected": { color: "rgba(207, 22, 111, 0.5)" },
              }}
            >
              <Tab label="Developer" value="1" />
              <Tab label="Marketing" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <Accordion
              sx={{
                padding: 0,
                marginTop: "10px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0px 0px",
                  height: "100%",
                  width: "100%",
                  div: {
                    margin: 0,
                  },
                }}
              >
                <JobPositionCard
                  title="Full stack Developer"
                  location="noida"
                  workPlace="Remote"
                  type="Full Time"
                  jobLink="/"
                />
              </AccordionSummary>
              <AccordionDetails>
                <div className="job_accordion_details">
                  <div className="jovaccordion_details_section">
                    <h2>Business Executive Development duties include:</h2>
                    <ul>
                      <li>Business Executive Development duties include:</li>
                      <li>
                        Writing clean, functional code on the front- and
                        back-end
                      </li>
                      <li>Testing and fixing bugs or other coding issues</li>
                    </ul>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Job brief</h2>
                    <p>
                      We are looking for a Full Stack Developer to produce
                      scalable software solutions. You’ll be part of a
                      cross-functional team that’s responsible for the full
                      software development life cycle, from conception to
                      deployment.
                    </p>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Requirements and skills</h2>
                    <ul>
                      <li>
                        Proven experience as a Full Stack Developer or similar
                        role
                      </li>
                      <li>
                        Experience developing desktop and mobile applications
                      </li>
                      <li>Familiarity with common stacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 0,
                marginTop: "10px",
                boxShadow: "none",
                border: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0px 0px",
                  height: "100%",
                  width: "100%",
                  div: {
                    margin: 0,
                  },
                }}
              >
                <JobPositionCard
                  title="Senior Backend Developer"
                  location="Bangluru"
                  workPlace="Work from office"
                  type="Full Time"
                  jobLink="/"
                />
              </AccordionSummary>
              <AccordionDetails>
                <div className="job_accordion_details">
                  <div className="jovaccordion_details_section">
                    <h2>Business Executive Development duties include:</h2>
                    <ul>
                      <li>Business Executive Development duties include:</li>
                      <li>
                        Writing clean, functional code on the front- and
                        back-end
                      </li>
                      <li>Testing and fixing bugs or other coding issues</li>
                    </ul>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Job brief</h2>
                    <p>
                      We are looking for a Full Stack Developer to produce
                      scalable software solutions. You’ll be part of a
                      cross-functional team that’s responsible for the full
                      software development life cycle, from conception to
                      deployment.
                    </p>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Requirements and skills</h2>
                    <ul>
                      <li>
                        Proven experience as a Full Stack Developer or similar
                        role
                      </li>
                      <li>
                        Experience developing desktop and mobile applications
                      </li>
                      <li>Familiarity with common stacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 0,
                marginTop: "10px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0px 0px",
                  height: "100%",
                  width: "100%",
                  div: {
                    margin: 0,
                  },
                }}
              >
                <JobPositionCard
                  title="Full stack Developer"
                  location="noida"
                  workPlace="Remote"
                  type="Full Time"
                  jobLink="/"
                />
              </AccordionSummary>
              <AccordionDetails>
                <div className="job_accordion_details">
                  <div className="jovaccordion_details_section">
                    <h2>Business Executive Development duties include:</h2>
                    <ul>
                      <li>Business Executive Development duties include:</li>
                      <li>
                        Writing clean, functional code on the front- and
                        back-end
                      </li>
                      <li>Testing and fixing bugs or other coding issues</li>
                    </ul>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Job brief</h2>
                    <p>
                      We are looking for a Full Stack Developer to produce
                      scalable software solutions. You’ll be part of a
                      cross-functional team that’s responsible for the full
                      software development life cycle, from conception to
                      deployment.
                    </p>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Requirements and skills</h2>
                    <ul>
                      <li>
                        Proven experience as a Full Stack Developer or similar
                        role
                      </li>
                      <li>
                        Experience developing desktop and mobile applications
                      </li>
                      <li>Familiarity with common stacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
          <TabPanel value="2" sx={{ padding: 0 }}>
            <Accordion
              sx={{
                padding: 0,
                marginTop: "10px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0px 0px",
                  height: "100%",
                  width: "100%",
                  div: {
                    margin: 0,
                  },
                }}
              >
                <JobPositionCard
                  title="Business Executive Development"
                  location="noida"
                  workPlace="Remote"
                  type="Full Time"
                  jobLink="/"
                />
              </AccordionSummary>
              <AccordionDetails>
                <div className="job_accordion_details">
                  <div className="jovaccordion_details_section">
                    <h2>Business Executive Development duties include:</h2>
                    <ul>
                      <li>Business Executive Development duties include:</li>
                      <li>
                        Writing clean, functional code on the front- and
                        back-end
                      </li>
                      <li>Testing and fixing bugs or other coding issues</li>
                    </ul>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Job brief</h2>
                    <p>
                      We are looking for a Full Stack Developer to produce
                      scalable software solutions. You’ll be part of a
                      cross-functional team that’s responsible for the full
                      software development life cycle, from conception to
                      deployment.
                    </p>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Requirements and skills</h2>
                    <ul>
                      <li>
                        Proven experience as a Full Stack Developer or similar
                        role
                      </li>
                      <li>
                        Experience developing desktop and mobile applications
                      </li>
                      <li>Familiarity with common stacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                padding: 0,
                marginTop: "10px",
                boxShadow: "none",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                  padding: "0px 0px",
                  height: "100%",
                  width: "100%",
                  div: {
                    margin: 0,
                  },
                }}
              >
                <JobPositionCard
                  title="Associate Category Manager"
                  location="Bangluru"
                  workPlace="Work from office"
                  type="Full Time"
                  jobLink="/"
                />
              </AccordionSummary>
              <AccordionDetails>
                <div className="job_accordion_details">
                  <div className="jovaccordion_details_section">
                    <h2>Business Executive Development duties include:</h2>
                    <ul>
                      <li>Business Executive Development duties include:</li>
                      <li>
                        Writing clean, functional code on the front- and
                        back-end
                      </li>
                      <li>Testing and fixing bugs or other coding issues</li>
                    </ul>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Job brief</h2>
                    <p>
                      We are looking for a Full Stack Developer to produce
                      scalable software solutions. You’ll be part of a
                      cross-functional team that’s responsible for the full
                      software development life cycle, from conception to
                      deployment.
                    </p>
                  </div>
                  <div className="jovaccordion_details_section">
                    <h2>Requirements and skills</h2>
                    <ul>
                      <li>
                        Proven experience as a Full Stack Developer or similar
                        role
                      </li>
                      <li>
                        Experience developing desktop and mobile applications
                      </li>
                      <li>Familiarity with common stacks</li>
                    </ul>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default Career;

import React from "react";
import "../style/module.value.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { BsChevronCompactDown } from "react-icons/bs";
import accordionData from "../utils/accordion";
import "../style/module.value.css";

const Value = () => {
  return (
    <section className="value_container">
      <div className="value_container_1">
        <div className="value_section_image_container">
          <div>
            <img src="./value.png" alt="profile picture of value section" />
          </div>
        </div>
        <div className="value_section_desc">
          <div>
            <h1>Our value</h1>
            <p>
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <div style={{ color: "black" }}>
            <Accordion>
              {accordionData.map((items, index) => {
                return (
                  <AccordionItem className="accordionItems">
                    <AccordionItemHeading id="accordionHeading">
                      <AccordionItemButton className="accordionButton">
                        <div>{items.heading}</div>
                        <BsChevronCompactDown />
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="accordionDetail">
                      <p>{items.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;

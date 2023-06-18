import React from "react";
import "../style/module.contactus.css";
import {MdCall} from "react-icons/md"
import {AiTwotoneMessage} from "react-icons/ai"
import {BiMessage} from "react-icons/bi"

const Contactus = () => {
  return (
    <section className="contactus">
      <div className="contact_container">
        <div className="left_side_div_of_contact">
          <div>
            <h2>Our contacts</h2>
            <p className="contactus_desc">
              We always ready to help by providijng the best services for you.
              We beleive a good blace to live can make your life better
            </p>
          </div>
          <div className="contact_buttons_container">
            <div className="btns">
              <div>
                <p>
                  <MdCall size={20} />
                </p>
                <div>
                  <span>Call</span>
                  <p>981876546</p>
                </div>
              </div>
              <div>
                <button>Call Now</button>
              </div>
            </div>

            <div className="btns">
              <div>
                <p>
                  <AiTwotoneMessage size={20} />
                </p>
                <div>
                  <span>Chat Now</span>
                  <p>981876546</p>
                </div>
              </div>
              <div>
                <button>Call Now</button>
              </div>
            </div>

            <div className="btns">
              <div>
                <p>
                  <AiTwotoneMessage  size={20}/>
                </p>
                <div>
                  <span>Video Call</span>
                  <p>981876546</p>
                </div>
              </div>
              <div>
                <button>Message</button>
              </div>
            </div>

            <div className="btns">
              <div>
                <p>
                  <BiMessage size={20}/>
                </p>
                <div>
                  <span>Chat Now</span>
                  <p>981876546</p>
                </div>
              </div>
              <div>
                <button>Call Now</button>
              </div>
            </div>
          </div>
        </div>

        <div className="right_side_div_of_contact">
          <div>
            <img src="./contact.jpg" alt="contact section image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;

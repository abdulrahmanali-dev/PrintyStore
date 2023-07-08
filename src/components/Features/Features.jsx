import {
  faAddressBook,
  faIdBadge,
  faListAlt,
  faNewspaper,
  faRectangleXmark,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="d-flex gap-5 justify-content-center align-items-center flex-wrap">
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <FontAwesomeIcon icon="fas fa-sticky-note" />
              </div>
              <p className="text-center">Stickers</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <i class="fa-solid fa-dragon"></i>
              </div>
              <p className="text-center">Figures</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                {/* <i class="fa-solid fa-tablet-button"></i> */}
                {/* <i class="fa-brands fa-square-pied-piper"></i> */}
                <i class="fa-solid fa-image"></i>
              </div>
              <p className="text-center">Posters</p>
            </div>
          </div>
          <div className=" feat">
            <div className="info d-flex flex-column justify-content-center align-items-center ">
              <div className="icon">
                <i class="fas fa-tag"></i>
              </div>
              <p className="text-center">Lables</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default features;

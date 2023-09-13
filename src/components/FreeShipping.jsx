import React from "react";

const FreeShipping = () => {
  return (
    <section className="free-shipping">
      <div className="container">
        <div className="row">
          <div className="title col-12 col-lg-6">
            <h2>Free shipping, free online proofs, fast turnaround.</h2>
          </div>
          <div className="desc col-12 col-lg-6">
            <div className="icons">
              <div className="icon">
              <img src={require("../assets/images/user-1.png")} alt="" />
              </div>
              <div className="icon">
              <img src={require("../assets/images/user-2.png")} alt="" />
              </div>

              <div className="icon">
              <img src={require("../assets/images/user-3.png")} alt="" />
              </div>
              <div className="icon">
              <img src={require("../assets/images/user-4.png")} alt="" />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem, ullam illum hic qui modi quo nulla laborum, libero
              exercitationem amet facere perferendis totam, aut esse tempore
              optio soluta nam architecto?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeShipping;

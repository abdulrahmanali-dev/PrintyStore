import React, { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import poster1  from "../../assets/images/products/posters/poster-1.webp";



const Timer = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  let interval;
  const countDown = () => {
    const distination = new Date("june 1, 2024").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diffrent = distination - now;
      const days = Math.floor(diffrent / (1000 * 60 * 60 * 24));

      const hours = Math.floor(
        (diffrent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diffrent % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diffrent % (1000 * 60)) / 1000);
      if (distination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };
  useEffect(()=>{
    countDown()
  })
  return (
    <section className="timer">
      <Container>
        <Row>
          <div className="align-items-center d-flex justify-content-md-start justify-content-center  text-light col-12 col-md-6">
            <div className="info">
              <span>Limited Offers</span>
              <h3>Quality Stickers</h3>
              <div className="time-wrapper d-flex justify-content-center justify-content-md-start gap-3 align-items-center">
                <div className="time-block d-flex flex-column ">
                  <h3 className="text-center time">{days}</h3>
                  <h4 className="text-center title">Days</h4>
                </div>
                :
                <div className="time-block d-flex flex-column ">
                  <h3 className="text-center time">{hours} </h3>
                  <h4 className="text-center title">Hours</h4>
                </div>
                :
                <div className="time-block d-flex flex-column ">
                  <h3 className="text-center time">{minutes}</h3>
                  <h4 className="text-center title">Minutes</h4>
                </div>
                :
                <div className="time-block d-flex flex-column ">
                  <h3 className="text-center time">{seconds}</h3>
                  <h4 className="text-center title">Seconds</h4>
                </div>
              </div>
              <button className="btn">
                <Link to={"/shop"}>Visit Store</Link>
              </button>
            </div>
          </div>
          <div className="col-12 col-md-6 d-none d-md-block">
            <div className="image">
              <img
                src={poster1}
              />
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Timer;

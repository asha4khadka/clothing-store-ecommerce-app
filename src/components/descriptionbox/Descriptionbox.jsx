import React from "react";
import "./description.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce, or electronic commerce, refers to the buying and selling
          of goods and services over the internet. This digital marketplace
          allows consumers to shop from anywhere at any time, offering
          unparalleled convenience. E-commerce encompasses a variety of business
          models, including business-to-consumer (B2C), business-to-business
          (B2B), consumer-to-consumer (C2C), and consumer-to-business (C2B).
        </p>
        <p>
          Key features of e-commerce include online storefronts, digital payment
          methods, and electronic data interchange (EDI) to facilitate
          transactions. It leverages technologies such as mobile commerce,
          electronic funds transfer, and automated data collection systems.
          Platforms like Amazon, eBay, and Alibaba have popularized e-commerce
          by providing extensive product selections and efficient delivery
          systems.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;

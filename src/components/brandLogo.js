import React from "react";
import amazon from "../assets/images/client/beritasatu.png";
import google from "../assets/images/client/republika.png";
import lenovo from "../assets/images/client/tribun1.png";
import paypal from "../assets/images/client/detik.png";
import shopify from "../assets/images/client/kompasdownload-removebg-preview.png";

export default function BrandLogo() {
  const brandLogo = [amazon, google, lenovo, paypal, shopify];
  return (
    <div className="container relative">
      <div className="grid md:grid-cols-6 grid-cols-2 justify-center gap-6">
        {brandLogo.map((item, index) => {
          return (
            <div className="mx-auto py-4" key={index}>
              <img src={item} className="h-14" alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

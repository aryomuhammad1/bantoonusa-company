import React from "react";

const ServiceCard = ({ title, body, img }) => {
  return (
    <div className="w-[22%] font-inter">
      <div className="bg-dark mb-12 rounded-[17px] flex justify-center items-center aspect-[1/.9]">
        <img src={img} className="h-[68px]" alt="" />
      </div>
      <div className="text-start mb-8">
        <h3 className="mb-4 text-[28px] font-semibold">{title}</h3>
        <p className="text-base font-medium">{body}</p>
      </div>
    </div>
  );
};

export default ServiceCard;

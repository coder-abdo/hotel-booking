import { AddHotelForm } from "@/components/hotel/addHotelForm";
import React from "react";
interface HotelPageProps {
  params: {
    hotelId: string;
  };
}
const Hotel = ({ params }: HotelPageProps) => {
  return (
    <div>
      <AddHotelForm />
    </div>
  );
};

export default Hotel;

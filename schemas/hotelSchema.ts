import { z } from "zod";

const createHotelDto = z.object({
  title: z.string().min(3, {
    message: "Title is too short",
  }),
  description: z.string().min(10, {
    message: "Description is too short",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  country: z.string().min(1, {
    message: "Country is required",
  }),
  state: z.string().optional(),
  city: z.string().optional(),
  locationDescription: z.string().min(10, {
    message: "Location description is too short",
  }),
  gym: z.boolean().optional(),
  spa: z.boolean().optional(),
  bar: z.boolean().optional(),
  laundary: z.boolean().optional(),
  restaurant: z.boolean().optional(),
  shopping: z.boolean().optional(),
  freeParking: z.boolean().optional(),
  bikeRental: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  movieNights: z.boolean().optional(),
  coffeeShop: z.boolean().optional(),
  swimmingPool: z.boolean().optional(),
});
const createRoomDto = z.object({
  title: z.string().min(3, {
    message: "Title is too short",
  }),
  description: z.string().min(10, {
    message: "Description is too short",
  }),
  image: z.string().min(1, {
    message: "Image is required",
  }),
  roomService: z.boolean().optional(),
  TV: z.boolean().optional(),
  balcony: z.boolean().optional(),
  freeWifi: z.boolean().optional(),
  cityView: z.boolean().optional(),
  forestView: z.boolean().optional(),
  mountainView: z.boolean().optional(),
  oceanView: z.boolean().optional(),
  airCondition: z.boolean().optional(),
  soundProofed: z.boolean().optional(),
});
export { createHotelDto, createRoomDto };

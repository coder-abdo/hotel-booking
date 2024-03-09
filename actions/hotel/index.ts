import prismadb from "@/lib/prismadb";

const getHotelById = async (hotelId: string) => {
  try {
    const hotel = await prismadb.hotel.findUnique({
      where: {
        id: hotelId,
      },
      include: {
        rooms: true,
      },
    });
    if (!hotel) throw new Error("Hotel not found");
    return hotel;
  } catch (err) {
    if (err instanceof Error) {
      throw new Error(err.message);
    }
  }
};

export { getHotelById };

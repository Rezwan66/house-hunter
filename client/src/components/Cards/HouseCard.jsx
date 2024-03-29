const HouseCard = ({ house }) => {
  //   console.log(Object.keys(house).join(','));
  const { location, price, image } = house || {};
  return (
    <div className="col-span-1 cursor-pointer group">
      <div className="flex flex-col gap-2 w-full">
        <div
          className="
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            "
        >
          <img
            className="
                object-cover 
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              "
            src={image}
            alt="Room"
          />
        </div>
        <div className="font-semibold text-lg">{location}</div>
        <div className="font-light text-neutral-500">
          2 nights, 1 day . May 20 - 22
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="md:text-lg font-semibold">$ {price}</div>
          <div className="font-light">/ night</div>
        </div>
      </div>
    </div>
  );
};

export default HouseCard;

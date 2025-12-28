const TrendingCard = ({
  image,
  name,
  category,
  price,
  highlighted = false,
}) => {
  return (
    <div className="flex flex-col-reverse gap-3">
      <div
        className={`rounded-xl overflow-hidden ${
          highlighted ? "ring-2 ring-cyan-400" : ""
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-xs text-gray-400">{category}</p>
        </div>
        <span className="text-xs text-purple-400 font-medium">
          {price}
        </span>
      </div>
    </div>
  );
};

export default TrendingCard;
const NFTCard = ({ image, title }) => {
  return (
    <div className="bg-[#1a102f] p-4 rounded-2xl">
      <img src={image} className="rounded-xl mb-4" />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-400">Current Bid</p>
    </div>
  );
};

export default NFTCard;
const ExploreButton = ({ children }) => {
    return (
        <button
            className="
        mt-10
        px-20 py-3
        text-white font-bold text-xl
        rounded-lg
        bg-gradient-to-b from-fuchsia-600 to-indigo-600
        [clip-path:polygon(0_0,100%_0,100%_20%,94%_100%,0_100%)]
      "
        >
            {
                children
            }
        </button>
    );
};

export default ExploreButton;
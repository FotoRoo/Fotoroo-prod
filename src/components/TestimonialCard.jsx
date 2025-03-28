const TestimonialCard = ({ photoUri, displayName, text, rating }) => {
    return (
      <div className="bg-transparent border border-textCol rounded-lg shadow p-4 w-60 flex-shrink-0 overflow-hidden">
        <div className="flex justify-between gap-4 mb-4">
          <img
            src={photoUri}
            alt={displayName}
            className="w-12 h-12 object-cover"
          />
          <div className="flex ">
          {[...Array(5)].map((_, index) => (
            <span
              key={index}
              className={`${
                index < rating ? "text-yellow-500" : "text-gray-300"
              } text-lg`}
            >
              ★
            </span>
          ))}
        </div>
        </div>
        <h1 className="-mt-3 ">{displayName}</h1>
        <p className="text-sm text-gray-600 my-4 overflow-y-auto max-h-32">{text}</p>
        
      </div>
    );
  };

  export default TestimonialCard
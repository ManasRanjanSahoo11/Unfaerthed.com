import { useNavigate } from 'react-router-dom';

export function HotelBooking__RoomCard({ image, title, description, rating, price }) {
  const navigate = useNavigate();

  function handleReserveClick() {
    navigate('/hotelbooking/reserve-room', {
        state: {
          price
        },
      });
  }

  return (
    <div className="w-full max-w-[26rem] shadow-lg rounded-lg overflow-hidden bg-gray-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />

        <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>

        <button className="absolute top-4 right-4 rounded-full bg-red-500 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6"
          >
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </button>
      </div>
      <div className="p-4">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="text-lg font-semibold text-gray-800">{title}</h5>
          <div className="flex items-center gap-1.5 text-yellow-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            {rating}
          </div>
        </div>
        <p className="text-gray-600 line-clamp-2 mb-2">
          {description}
        </p>
        <p className="text-lg font-semibold text-gray-700 mb-4 bg-gray-300 w-fit px-3 py-1 rounded-md">
         ₹{" "}{price} / Night
        </p>
        <div className="mt-8">
          <ul className="flex gap-5">
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-96.png" alt="" />
            </li>
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-95.png" alt="" />
            </li>
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-94.png" alt="" />
            </li>
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-93.png" alt="" />
            </li>
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-92.png" alt="" />
            </li>
            <li className="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 hover:border-gray-900/10 hover:bg-gray-900/10 hover:opacity-80">
              <img src="../Imgs-Videos/h-91.png" alt="" />
            </li>
          </ul>
        </div>

        <button
          onClick={handleReserveClick}
          className="bg-orange-400 text-white shadow-sm w-full py-2 rounded-sm font-semibold text-md mt-5"
        >
          Reserve
        </button>
      </div>
    </div>
  );
}

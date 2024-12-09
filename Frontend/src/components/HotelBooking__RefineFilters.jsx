import React, { useState } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Shanti Palace",
    href: "#",
    price: "$9",
    imageSrc:
      "https://lh3.googleusercontent.com/p/AF1QipNyD7k-wlKgj084hhDNxfUevAH38I4HmNXaABKa=w287-h192-n-k-rw-no-v1",
    imageAlt: "",
  },
  {
    id: 2,
    name: "Sea Dream Lodge",
    href: "#",
    price: "$19",
    imageSrc:
      "https://lh3.googleusercontent.com/p/AF1QipPbWCQBKNhG08uakLe2TLQjKXaFxzn0hsw_x60H=w287-h192-n-k-rw-no-v1",
    imageAlt: "",
  },
  {
    id: 3,
    name: "Goroomgo Prateek Residency Digha",
    href: "#",
    price: "$29",
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/27/6a/3a/72/extriour.jpg?w=1200&h=-1&s=1",
    imageAlt: "",
  },
  {
    id: 4,
    name: "Hotel Seagull",
    href: "#",
    price: "$9",
    imageSrc:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/42/97/ef/imag0957-largejpg.jpg?w=1100&h=-1&s=1",
    imageAlt: "",
  },
];

// Component
export default function HotelBooking__RefineFilters() {
  const [selectedPrice, setSelectedPrice] = useState("");

  // Filter products dynamically
  const filteredProducts = products.filter((product) => {
    if (!selectedPrice) return true;
    const productPrice = parseInt(product.price.replace('$', ''));
    if (selectedPrice === "under10") return productPrice < 10;
    if (selectedPrice === "under20") return productPrice < 20;
    if (selectedPrice === "under30") return productPrice < 30;
    if (selectedPrice === "under35") return productPrice < 35;
    return false;
  });

  return (
    <div className="bg-gray-700">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {/* Filter Dropdown */}
        <div className="mb-6">
          <select
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-md bg-gray-200 font-medium focus:ring-2 focus:ring-blue-500"
          >
            <option value="" className="font-medium">All Prices</option>
            <option value="under10" className="font-medium">Under $10</option>
            <option value="under20" className="font-medium">Under $20</option>
            <option value="under30" className="font-medium">Under $30</option>
            <option value="under35" className="font-medium">Under $35</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8]"
              />
              <h3 className="mt-4 text-sm text-gray-300">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-300">
                {product.price}
              </p>
            </a>
          ))}

          {filteredProducts.length === 0 && (
            <p className="text-gray-500 col-span-full text-center">
              No products match your selection.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

import React from "react";

const ProductFeatures: React.FC = () => {
  return (
    <div className="mt-8 pt-8 border-t">
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="h-12 w-12 mx-auto bg-leaf/10 rounded-full flex items-center justify-center mb-2">
            <svg
              className="h-6 w-6 text-leaf"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L20 7V17L12 22L4 17V7L12 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="font-medium text-sm">Premium Quality</h4>
        </div>

        <div className="text-center">
          <div className="h-12 w-12 mx-auto bg-leaf/10 rounded-full flex items-center justify-center mb-2">
            <svg
              className="h-6 w-6 text-leaf"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="font-medium text-sm">Fast Delivery</h4>
        </div>

        <div className="text-center">
          <div className="h-12 w-12 mx-auto bg-leaf/10 rounded-full flex items-center justify-center mb-2">
            <svg
              className="h-6 w-6 text-leaf"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h4 className="font-medium text-sm">Satisfaction Guaranteed</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;

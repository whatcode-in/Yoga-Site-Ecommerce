import { useState } from 'react';
import { X } from 'react-feather';

const IndexPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        onClick={toggleModal}
      >
        Toggle Modal
      </button>

      {modalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
    <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full md:flex">
      <div className="md:w-3/4">
        {/* Left side content */}
        <img
          src="image.jpg"
          alt="Image"
          className="h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none"
        />
      </div>
      <div className="md:w-1/4 md:flex-shrink-0 md:border-l md:border-gray-200">
        {/* Right side content */}
        <div className="p-4 md:p-6">
          <div className="flex justify-end">
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={toggleModal}
            >
              <X size={24} />
            </button>
          </div>
          <h2 className="text-xl font-semibold mb-4">Title</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pretium eros non metus dignissim
            tincidunt. Nunc venenatis sem id est faucibus venenatis.
          </p>
        </div>
      </div>
    </div>
  </div>
)}

    </div>
  );
};

export default IndexPage;

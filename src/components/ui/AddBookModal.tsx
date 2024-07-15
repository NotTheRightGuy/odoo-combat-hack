"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiBook, FiHash, FiPlus } from "react-icons/fi";

const AddBookModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isbn, setIsbn] = useState("");
  const [quantity, setQuantity] = useState("");

  // Open the modal immediately when the component mounts
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleAddBook = async () => {
    // Add your logic to handle adding the book
    console.log("Adding book with ISBN:", isbn, "and quantity:", quantity);
    setIsOpen(false);
    try {
      console.log("Adding book with ISBN:", isbn, "and quantity:", quantity);
      const response = await fetch("/api/books", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isbn, quantity }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Failed to add book:", errorText);
        return;
      }

      const data = await response.json();
      console.log("Book added successfully:", data);
    } catch (error) {
      console.error("Failed to add book", error);
    }
  };

  return (
    <SpringModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isbn={isbn}
      setIsbn={setIsbn}
      quantity={quantity}
      setQuantity={setQuantity}
      handleAddBook={handleAddBook}
    />
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
  isbn,
  setIsbn,
  quantity,
  setQuantity,
  handleAddBook,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isbn: string;
  setIsbn: React.Dispatch<React.SetStateAction<string>>;
  quantity: string;
  setQuantity: React.Dispatch<React.SetStateAction<string>>;
  handleAddBook: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white text-slate-900 p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiBook className="text-slate-200 rotate-12 text-[250px] absolute z-0 -top-24 -left-24" />
            <div className="relative z-10">
              <div className="bg-slate-200 w-16 h-16 mb-2 rounded-full text-3xl text-slate-600 grid place-items-center mx-auto">
                <FiBook />
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                Add New Book
              </h3>
              <div className="my-4">
                <label
                  htmlFor="isbn"
                  className="block text-sm font-medium text-slate-700"
                >
                  ISBN Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiHash className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="text"
                    name="isbn"
                    id="isbn"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md p-2"
                    placeholder="Enter ISBN"
                    value={isbn}
                    onChange={(e) => setIsbn(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-slate-700"
                >
                  Quantity
                </label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-slate-300 rounded-md p-2"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold w-full py-2 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddBook}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full py-2 rounded transition-colors flex items-center justify-center"
                >
                  <FiPlus className="mr-2" />
                  Add Book
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddBookModal;

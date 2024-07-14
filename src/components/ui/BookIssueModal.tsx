"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiBook, FiMail, FiCalendar, FiSend } from "react-icons/fi";

const IssueBookModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const issueDate = new Date().toISOString().split("T")[0];
  const dueDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleIssueBook = () => {
    console.log(
      "Issuing book to:",
      email,
      "Issue date:",
      issueDate,
      "Due date:",
      dueDate
    );
    setIsOpen(false);
  };

  return (
    <SpringModal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      email={email}
      setEmail={setEmail}
      issueDate={issueDate}
      dueDate={dueDate}
      handleIssueBook={handleIssueBook}
    />
  );
};

const SpringModal = ({
  isOpen,
  setIsOpen,
  email,
  setEmail,
  issueDate,
  dueDate,
  handleIssueBook,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  issueDate: string;
  dueDate: string;
  handleIssueBook: () => void;
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
                Issue Book
              </h3>
              <div className="my-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700"
                >
                  User Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiMail className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md p-2"
                    placeholder="Enter user email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="issueDate"
                  className="block text-sm font-medium text-slate-700"
                >
                  Issue Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="date"
                    name="issueDate"
                    id="issueDate"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md p-2"
                    value={issueDate}
                    readOnly
                  />
                </div>
              </div>
              <div className="my-4">
                <label
                  htmlFor="dueDate"
                  className="block text-sm font-medium text-slate-700"
                >
                  Due Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiCalendar className="h-5 w-5 text-slate-400" />
                  </div>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-slate-300 rounded-md p-2"
                    value={dueDate}
                    readOnly
                  />
                </div>
              </div>
              <div className="flex gap-2 mt-6">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold w-full py-2 rounded transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleIssueBook}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold w-full py-2 rounded transition-colors flex items-center justify-center"
                >
                  <FiSend className="mr-2" />
                  Issue Book
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IssueBookModal;

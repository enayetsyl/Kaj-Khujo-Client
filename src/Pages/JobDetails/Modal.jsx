import { useState } from "react";
import Button from "../../Component/Button";

export default function MyModal({ visible, onClose, onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resumeLink, setResumeLink] = useState("");

  const handleSubmit = () => {
    // You can perform any action you need with the input values here.
    // Call the onSubmit function with the input values as parameters.
    onSubmit(name, email, resumeLink);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="bg-white p-4 rounded w-80">
        <h2 className="text-xl font-semibold mb-2">Modal Title</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border rounded w-full p-2"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Resume Link
          </label>
          <input
            type="text"
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            placeholder="Paste your resume link"
            className="border rounded w-full p-2"
          />
        </div>
        <div className="flex justify-center">
        <button
          onClick={handleSubmit}
          className=""
        >
          <Button>Submit</Button>
        </button>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <div>
      <motion.button whileHover={{ 
        scale: 1.5,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        boxShadow: "0px 0px 8px rgb(255,255,255)",        
      }} className="font-bold text-white border border-solid py-2 px-4 border-black bg-red-600">{children}</motion.button>
    </div>
  );
};

export default Button;

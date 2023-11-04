import { motion } from "framer-motion";

const Button = ({ children }) => {
  return (
    <div>
      <motion.button whileHover={{ 
        scale: 1.5,
        textShadow: "0px 0px 4px rgb(255,255,255)",
        boxShadow: "0px 0px 12px rgb(255,255,255)",        
      }} className="font-bold text-buttonText border border-solid py-2 px-4 border-buttonBorder bg-button">{children}</motion.button>
    </div>
  );
};

export default Button;

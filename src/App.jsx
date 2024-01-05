import { Home } from "./pages";
import { motion } from "framer-motion";

const App = () => {
  return (
    <motion.div
      style={{
        width: "100%",
        background: "linear-gradient(to right, #FCF4C3, #E6F8F8)",
      }}
      animate={{ background: "linear-gradient(to right, #FCF4C3, #E6F8F8)" }}
    >
      <Home />
    </motion.div>
  );
};

export default App;

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = (props) => {
  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <ul>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link to="/">Domů</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link to="/createRoom">Vytvořit novou místnost</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.05 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link to="/rooms">Navštívit místnost</Link>
      </motion.li>
      <motion.li
        initial={animateFrom}
        animate={animateTo}
        transition={{ delay: 0.2 }}
        whileHover={{ scale: 1.2 }}
        onClick={() => props.isMobile && props.onCloseMobileMenu()}
      >
        <Link to="/account">Účet</Link>
      </motion.li>
      {props.isMobile && (
        <motion.li
          initial={animateFrom}
          animate={animateTo}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.2 }}
          onClick={() => props.isMobile && props.onCloseMobileMenu()}
        >
          <Link to="/account">Log in</Link>
        </motion.li>
      )}
    </ul>
  );
};

export default NavLinks;

import {FaSteam} from "react-icons/fa";
import { motion } from "framer-motion"
import { lookup } from "dns";

function Loader(){

    return(
        <div className="loaderContainer">
            <motion.div className="loader"
            animate={{rotate:360}}
            transition={{duration: 2,
                repeatType: "loop",
                repeat: Infinity}}>
                <FaSteam/>
            </motion.div>
            <p className="loadingText">Loading...</p>
        </div>
    )
}

export default Loader;
import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options ={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title}
          className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p
    variants={fadeIn("", "", 0.1, 1)}
    className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      As for my hobbies, I love playing games, with Valorant, Mobile Legends, and Resident Evil being among my favorites, and I also enjoy reading books and watching movies, with Kung Fu Panda, Hotel Transylvania, How to Train Your Dragon, Harry Potter, and Marvel movies being some of my top picks. Additionally, I have a keen interest in studying programming codes such as Javascript, PHP, HTML, and CSS, as I find them fascinating and they allow me to design and construct websites.
      to demonstrate my dedication to my job, as well as my excitement for it. towards my work. eager to serve the given task with commitment, possessing high work ethics, and being very adaptable and malleable to his work environment.
    </motion.p>

    <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index) => (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
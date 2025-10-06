"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutTeam = () => {
  const leadership = [
    {
      name: "Dr. Sarah Chen",
      position: "President & CEO",
      bio: "Former Chief People Officer at Fortune 500 companies, leading GIHCR's strategic vision for global HR transformation.",
      image: "/images/user/user-01.png",
      linkedin: "#",
      expertise: ["Strategic Leadership", "Organizational Development", "Global HR"]
    },
    {
      name: "Prof. Michael Rodriguez",
      position: "Dean of Academic Affairs",
      bio: "Renowned researcher in future of work trends, with 25+ years in academic excellence and curriculum innovation.",
      image: "/images/user/user-02.png",
      linkedin: "#",
      expertise: ["Academic Leadership", "Research", "Curriculum Design"]
    },
    {
      name: "Dr. Aisha Patel",
      position: "VP of Global Programs",
      bio: "Expert in international education and cross-cultural HR practices, overseeing our worldwide program delivery.",
      image: "/images/user/user-03.png",
      linkedin: "#",
      expertise: ["Global Education", "Cultural Intelligence", "Program Management"]
    },
    {
      name: "James Thompson",
      position: "Chief Technology Officer",
      bio: "Pioneering educational technology and digital learning experiences that transform how HR professionals learn and grow.",
      image: "/images/user/user-04.png",
      linkedin: "#",
      expertise: ["EdTech Innovation", "Digital Learning", "AI in Education"]
    }
  ];

  const stats = [
    { number: "150+", label: "Expert Faculty" },
    { number: "45+", label: "Countries Represented" },
    { number: "30+", label: "Industry Partnerships" },
    { number: "95%", label: "PhD/Masters Faculty" }
  ];

  return (
    <section className="overflow-hidden py-20 lg:py-25 xl:py-30 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-gray-950">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-16 text-center"
        >
          <span className="font-medium uppercase text-primary dark:text-white">
            OUR LEADERSHIP
          </span>
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            Meet the Visionaries
            <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark ml-3">
              Behind GIHCR
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-titlebgdark dark:text-waterloo">
            Our leadership team combines decades of industry experience with academic excellence, driving innovation in HR education worldwide.
          </p>
        </motion.div>

        {/* Leadership Team */}
        <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 30,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="animate_top group rounded-2xl bg-white/80 backdrop-blur-sm p-6 text-center shadow-solid-8 border border-stroke dark:border-strokedark dark:bg-blacksection/80 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative mx-auto mb-6 h-24 w-24 overflow-hidden rounded-full">
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <h3 className="mb-1 text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                {leader.name}
              </h3>
              
              <p className="mb-3 text-sm font-medium text-primary">
                {leader.position}
              </p>
              
              <p className="mb-4 text-sm leading-relaxed text-titlebgdark dark:text-waterloo">
                {leader.bio}
              </p>
              
              <div className="mb-4 flex flex-wrap gap-1 justify-center">
                {leader.expertise.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <a
                href={leader.linkedin}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Faculty Stats */}
        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: 20,
            },
            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="animate_bottom"
        >
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 to-blue-50 dark:from-primary/20 dark:to-blue-900/10 p-8 border border-primary/20">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                World-Class Faculty Excellence
              </h3>
              <p className="text-titlebgdark dark:text-waterloo">
                Our diverse faculty brings together the best minds from academia and industry
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="mb-2 text-3xl font-bold text-primary">{stat.number}</h4>
                  <p className="text-sm font-medium text-black dark:text-white">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <a
                href="/faculty"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <span>Meet Our Faculty</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
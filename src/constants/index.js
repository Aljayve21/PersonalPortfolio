import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    bootstrap,
    kodego,
    nodejs,
    xampp,
    laravel,
    git,
    figma,
    capsa,
    carrent,
    trendythreads,
    eCommerce,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front-end Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Web Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Xampp",
      icon: xampp,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Bootstrap 5",
      icon: bootstrap,
    },
    {
      name: "Laravel 10",
      icon: laravel,
    }
  ];
  
  const certificates = [
    {
      name: "KodeGo",
      description:
        "My Certificates from KodeGo",
      tags: [
        {
          name: "Full Stack Web Development Certification",
          color: "blue-text-gradient",
        },
      ],
      image: kodego,
      source_code_link: "https://assets.kodego.ph/public/isa/YIttCWrQiLR2EB5fmC4E0qhbWEOLpcFQeEguRgCG.pdf",
    }
  ];
  
  const experiences = [
    {
      title: "Executive Assistant",
      company_name: "Capsa London Ltd",
      icon: capsa,
      iconBg: "#383E56",
      date: "Febuary 2023 - August 2023",
      points: [
        "Virtual Assistant (Any related task)",
        "Graphic Design",
        "Video Editing",
        "Data Entry - (Data Analyst)",
        "Lead Generation",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "My First Project that I created from bootcamp, The Technologies that I used to build this project are HTML, CSS, and Bootstrap",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Aljayve21/aljayve.github.io",
    },
    {
      name: "Trendy-Threads",
      description:
        "Second Project that I build with a collaboration of my groupmates during bootcamp and the Technologies That we used are HTML, CSS, AJAX, jQuery, API, and ReactJS",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: trendythreads,
      source_code_link: "https://github.com/Aljayve21/mini-project2.github.io/tree/main",
    },
    {
      name: "eCommerce Trendy-Threads",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: "MysQL",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
      ],
      image: eCommerce,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, certificates, projects };
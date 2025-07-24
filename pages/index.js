 // File: pages/index.js (Next.js)


import { useState, useRef, useEffect } from "react"; // already imported useState

import Image from "next/image";
import styles from "../styles/Home.module.css";
 

export default function Home() {
  const [activeService, setActiveService] = useState("network");
  const [techVisible, setTechVisible] = useState(false);
const [clientVisible, setClientVisible] = useState(false);

const techRef = useRef(null);
const clientRef = useRef(null);
 
useEffect(() => {
  const el = techRef.current;
  if (!el) return;

  const singleSetWidth = el.scrollWidth / 3;
  el.scrollLeft = singleSetWidth; // START in the center!

  const handleScroll = () => {
    if (el.scrollLeft <= 0) {
      // Scroll too far left → snap back to center
      el.scrollLeft = singleSetWidth;
    } else if (el.scrollLeft >= 2 * singleSetWidth) {
      // Scroll too far right → snap back to center
      el.scrollLeft = singleSetWidth;
    }
  };

  el.addEventListener("scroll", handleScroll);
  return () => el.removeEventListener("scroll", handleScroll);
}, []);



  const services = {
    it: {
      title: "IT SERVICES",
      background: "https://speedlinkng.com/wp-content/uploads/2022/09/pexels-nemuel-sereti-6424583.jpg",
      details: [
        "Managed IT Services",
        "Infrastructure Solutions",
        "Software Development",
        "IT Consulting",
      ],
    },
    network: {
      title: "NETWORKING SERVICES",
      background: "https://speedlinkng.com/wp-content/uploads/2022/09/pexels-brett-sayles-2881229.jpg",
      details: [
        "Routing and Switching",
        "VOIP – Voice over Internet Protocol",
        "Fibre to the home",
        "ISP – Internet Service Provider",
      ],
    },
    security: {
      title: "TECHNICAL SECURITY",
      background: "https://speedlinkng.com/wp-content/uploads/2022/09/Technical-Security-1.jpg",
      details: [
        "CCTV Surveillance Systems",
        "Access Control Systems",
        "Intrusion Detection",
        "Security Audits",
      ],
    },
    marketing: {
      title: "DIGITAL MARKETING",
      background: "/services/marketing.jpg",
      details: [
        "SEO Optimization",
        "Social Media Management",
        "Email Campaigns",
        "Content Creation",
      ],
    },
    cloud: {
      title: "CLOUD SERVICES",
      background: "/services/cloud.jpg",
      details: [
        "Cloud Infrastructure Setup",
        "Data Migration",
        "Cloud Security",
        "Backup & Recovery",
      ],
    },
    collaboration: {
      title: "COLLABORATION SYSTEM",
      background: "/services/collaboration.jpg",
      details: [
        "Microsoft Teams",
        "Zoom Integration",
        "Shared Workspaces",
        "Document Collaboration",
      ],
    },
  };

  const isDragging = useRef(false);
const startX = useRef(0);
const scrollLeft = useRef(0);

const handleMouseDown = (e, refType) => {
  isDragging.current = true;
  startX.current = e.pageX - techRef.current.offsetLeft;
  scrollLeft.current = techRef.current.scrollLeft;
};

const handleMouseMove = (e) => {
  if (!isDragging.current) return;
  e.preventDefault();
  const x = e.pageX - techRef.current.offsetLeft;
  const walk = x - startX.current;
  techRef.current.scrollLeft = scrollLeft.current - walk;
};

const handleMouseUp = () => {
  isDragging.current = false;
};

const handleMouseLeave = () => {
  isDragging.current = false;
};

// Touch support (for mobile)
const handleTouchStart = (e) => {
  startX.current = e.touches[0].pageX;
  scrollLeft.current = techRef.current.scrollLeft;
};

const handleTouchMove = (e) => {
  const x = e.touches[0].pageX;
  const walk = x - startX.current;
  techRef.current.scrollLeft = scrollLeft.current - walk;
};

const handleTouchEnd = () => {
  // no-op for now
};


  return (
    <div>
      {/* Top Social Bar */}
      <div className={styles.topBar}>
        <div className={styles.socialLinks}>
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <div className={styles.contactLinks}>
          <a href="tel:+2349167716220"><i className="fas fa-phone"></i> tel: +2349167716220</a>
          <a href="mailto:info@speedlinkng.com"><i className="fas fa-envelope"></i> info@speedlinkng.com</a>
        </div>
      </div>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/marc2020.png"
            alt="Speedlink Logo"
            width={200}
            height={90}
            unoptimized
          />
        </div>
        <nav className={styles.navbar}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Case Study</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#"><i className="fas fa-search"></i></a></li>
            <li><button className={styles.contactBtn}>Get in touch</button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <video autoPlay muted loop className={styles.heroVideo}>
          <source src="backgroundv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>We provide comprehensive IT<br />solutions that makes businesses<br />standout</h1>
          <p>We’re a team of IT experts who help you transform and scale your organization</p>
          <button className={styles.heroBtn}>IT SOLUTIONS AND SERVICES</button>
        </div>
      </section>

      {/* Company Intro Section */}
      <section className={styles.introSection}>
        <div className={styles.introContent}>
          <div className={styles.introText}>
            <h3>SPEEDLINK HI-TECH SOLUTIONS LIMITED</h3>
            <h1>A Complete Solution <br /> IT Provider</h1>
            <p>
              Speedlink Hi-Tech Solutions Limited is a Nigerian leading IT systems provider,
              known for providing clients with Enterprise world-class solutions addressing their
              local business needs. We deliver positive, rapid and the best return on investment
              “ROI” solutions for our customers.
            </p>
            <button className={styles.introBtn}>Who we are <i className="fas fa-paper-plane"></i></button>
          </div>
          <div className={styles.introImage}>
            <Image
              src="/image1.jpg"
              alt="Speedlink Team"
              width={500}
              height={400}
              className={styles.roundedImage}
              unoptimized
            />
          </div>
          {/* Certification Banner Section */}
          <section className={styles.certificationBanner}>
            <div className={styles.certificationContainer}>
              <div className={styles.certLogo}>
                <Image
                  src="/image2.jpg" 
                  alt="Pearson VUE Authorized Center"
                  width={130}
                  height={80}
                  unoptimized
                />
              </div>
              <div className={styles.certText}>
                <h2>Pursue Your Certification Dreams with Speedlink!</h2>
                <p>
                  We’re excited to announce that we’re now an official Pearson VUE testing center! <br/>
                  Schedule your exam today and unlock your full potential.
                </p>
              </div>
              <div className={styles.certButton}>
                <button className={styles.getCertifiedBtn}>Get Certified</button>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* Services We Offer Section */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesHeader}>
          <div className={styles.servicesHeaderText}>
            <h2>Services we offer</h2>
            <p>We offer a wide range of specialized services designed to meet your goals.</p>
          </div>
          <div className={styles.buttonRight}>
            <button className={styles.whoWeDoBtn}>
              Who we do <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>

        <div className={styles.servicesContainer}>
          <div className={styles.servicesTabs}>
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                className={`${styles.tabButton} ${activeService === key ? styles.activeTab : ""}`}
                onMouseEnter={() => setActiveService(key)}
              >
                {service.title}
              </button>
            ))}
          </div>

          <div
  className={styles.servicesDetails}
  style={{
      backgroundImage: `
    linear-gradient(to bottom, rgb(185, 21, 21), rgba(0, 0, 255, 0.64)),
    url(${services[activeService].background})
  `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundBlendMode: "overlay"
  }}
>

            <div className={styles.serviceText}>
              <h3>{services[activeService].title}</h3>
              <ul>
                {services[activeService].details.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button className={styles.exploreBtn}>
                EXPLORE MORE <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Industries We Serve Section */}
 
 <section className={styles.industriesSection}>
  <div className={styles.industriesHeader}>
    <h2>Industries We Serve</h2>
    <p>Perfect Blend of Innovation & Ideation Of Solutions For Every Industry.</p>
  </div>

  <div className={styles.industriesGridWrapper}>
    <div className={styles.industriesGrid}>
      {[
        { title: "Retail, Ecommerce", icon: "/image3.png", color: "#f56565" },
        { title: "Education & e-learning", icon: "/image14.png", color: "#4299e1" },
        { title: "Healthcare & Fitness", icon: "/image15.png", color: "#ed64a6" },
        { title: "Social Networking", icon: "/image16.png", color: "#d53f8c" },
        { title: "Logistics & Distribution", icon: "/image22.png", color: "#3182ce" },
      ].map((industry, index) => (
        <div key={index} className={styles.industryCard}>
          <div className={styles.icon}>
            {industry.icon.startsWith("/") ? (
              <Image src={industry.icon} alt={industry.title} width={40} height={40} unoptimized />
            ) : industry.icon ? (
              <span style={{ color: industry.color, fontSize: "2rem" }}>{industry.icon}</span>
            ) : (
              <span style={{ height: "40px" }}></span>
            )}
          </div>
          <p>{industry.title}</p>
        </div>
      ))}
    </div>

    <div className={styles.industriesGrid}>
      {[
        { title: "Government institutions", icon: "/image17.png", color: "#0bc5ea" },
        { title: "Real Estate", icon: "/image18.png", color: "#ed64a6" },
        { title: "Travel & Hospitality", icon: "/image19.png", color: "#63b3ed" },
        { title: "Food & Restaurant", icon: "/image20.png", color: "#f56565" },
        { title: "On-Demand Solutions", icon: "/image21.png", color: "#38a169" },
      ].map((industry, index) => (
        <div key={index} className={styles.industryCard}>
          <div className={styles.icon}>
            {industry.icon.startsWith("/") ? (
              <Image src={industry.icon} alt={industry.title} width={40} height={40} unoptimized />
            ) : industry.icon ? (
              <span style={{ color: industry.color, fontSize: "2rem" }}>{industry.icon}</span>
            ) : (
              <span style={{ height: "40px" }}></span>
            )}
          </div>
          <p>{industry.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Our Products Section */}
       <section className={styles.productsSection}>
      <h4 className={styles.productsTag}>Our Products</h4>
      <h2  className={styles.productsTitle}>
        Comprehensive IT SOLUTIONS<br />
        that sets your business apart
      </h2>
      <p className={styles.productsSubtitle}>Bringing Speed to your business</p>

      <div className={styles.productsGrid}>
        {[{
          image: "/image23.jpg",
          label: "DIGISCHOOL",
          icon: "fas fa-graduation-cap",
          description: "Comprehensive solution for administration, documentation, tracking, reporting, and automation for primary and secondary schools",
        }, {
          image: "/image24.jpg",
          label: "SPEEDUCATION",
          icon: "fas fa-university",
          description: "All in one learning management system for colleges and higher institutions",
        }, {
          image: "/image25.jpg",
          label: "SPEED ERP SOLUTION",
          icon: "fas fa-cogs",
          description: "Comprehensive ERP software for enterprise resource planning.",
        }].map((product, index) => (
          <div className={styles.productHoverCard} key={index}>
            <div className={styles.productImageWrapper}>
              <Image src={product.image} alt={product.label} width={300} height={250} unoptimized />
            </div>
            <div className={styles.productBase}>
              <i className={product.icon}></i> {product.label}
            </div>
            <div className={styles.productOverlayWrapper}>
              <div className={styles.productOverlay}>
                <div className={styles.productDetail}>
                  <div className={styles.productTitleBox}>
                    <i className={product.icon}></i>
                    <h3>{product.label}</h3>
                  </div>
                  <p>{product.description}</p>
                  <button className={styles.learnMoreBtn}><i className="fas fa-bolt"></i> Learn More</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.viewAllBtnContainer}>
        <button className={styles.viewAllBtn}>
          View all our products <i className="fas fa-paper-plane"></i>
        </button>
      </div>
    </section>
    
<section className="caseStudiesSection">
  <div className="caseStudiesHeader">
    <div className="textArea">
      <h2>Case Studies</h2>
      <p>
        We’re proud to have helped build innovative solutions solving complex
        problems across varying industries. Check out what we’ve been up to.
      </p>
    </div>
    <button className="seeMoreBtn">
      See more of our work <i className="fas fa-paper-plane"></i>
    </button>
  </div>

  <div className="caseStudiesGrid">
  
    <div className="caseStudyItem">
      <div className="caseStudyText pinkBG">
        <h3>Integration of a secured and reliable examination platform</h3>
        <p>
          We built a hitch-free proctoring software for the School of Public
          Health, University of Port Harcourt that offers students and test takers
          the freedom to take a proctored exam at any time in any given location…
        </p>
        <button className="caseStudyBtn">
          View Case Study <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="caseStudyImageWrapper">
        <img src="/image26.jpg" alt="Case Study Image 1" className="caseStudyImg" />
      </div>
    </div>

  
    <div className="caseStudyItem reverse">
      <div className="caseStudyImageWrapper">
        <img src="/image27.jpg" alt="Case Study Image 2" className="caseStudyImg" />
      </div>
      <div className="caseStudyText whiteBG">
        <h3>Hybrid Learning Facility</h3>
        <p>
          We developed a platform that can accommodate students who are unable to
          attend classes in person while also allowing students to attend classes
          in person or remotely with real-time audio and visual communication…
        </p>
        <button className="caseStudyBtn">
          View Case Study <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </div>
</section>
 
{/* Insights & Expertise Section */}
  <section className={styles.blogSection}>
  <div className={styles.blogHeader}>
    <p className={styles.blogTag}>Our Blog</p>
    <h2 className={styles.blogTitle}>Insights & Expertise</h2>
    <p className={styles.blogSubtitle}>
      Explore Our Blog for Expert Insights and Industry Trends
    </p>
  </div>

  <div className={styles.blogList}>
    {[
      {
        image: "/image28.jpg",
        title: "Empowering the Next Generation of Women in Tech",
        date: "April 21, 2025",
        excerpt: "In a world increasingly driven by technology, the voices shaping innovation must be as diverse as the people it serves. Yet, across ...",
      },
      {
        image: "/stem.jpg",
        title: "Why We Need More Women in STEM Now",
        date: "April 15, 2025",
        excerpt: "STEM: Science, technology, engineering, and mathematics shapes how we live, work, and solve problems every day. Yet, despite the growing demand for ...",
      },
      {
        image: "/soft skills.jpg",
        title: "Soft Skills that Matter in Tech",
        date: "April 10, 2025",
        excerpt: "In the world of tech, coding languages, frameworks, and digital tools often take center stage. But beyond the lines of code and ...",
      },
      {
        image: "/team.jpg",
        title: "Why Hands-On Learning Is More Effective Than Theory",
        date: "April 9, 2025",
        excerpt: "For those eager to master new skills today, SpeedLink Hi-Tech Solutions Limited is here to guide you. With hands-on training programs designed ...",
      },
    ].map((post, index) => (
      <div key={index} className={styles.blogPost}>
        <div className={styles.blogImgWrapper}>
          <img src={post.image} alt={post.title} className={styles.blogImg} />
        </div>
        <div className={styles.blogContent}>
          <span className={styles.blogCategory}>Uncategorized</span>
          <h3 className={styles.blogPostTitle}>{post.title}</h3>
          <p className={styles.blogMeta}>
            <strong>Admin Speedlink</strong> &nbsp;.&nbsp; {post.date} &nbsp;.&nbsp; No Comments
          </p>
          <p className={styles.blogExcerpt}>{post.excerpt}</p>
        </div>
      </div>
    ))}
  </div>
</section>
{/* Technology Stack Section */}
    <section className={styles.techStackSection}>
        <h2 className={styles.sectionTitle}>Technology stack</h2>
        <div className={styles.scrollHintWrapper}>
         <div
  ref={techRef}
  id="tech"
  className={`${styles.techIcons} ${techVisible ? styles.wiggle : ""}`}
  onMouseDown={(e) => handleMouseDown(e)}
  onMouseMove={(e) => handleMouseMove(e)}
  onMouseUp={handleMouseUp}
  onMouseLeave={handleMouseLeave}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
  {[...Array(3)].flatMap((_, i) =>
    [
      "/android.png",
      "/postgre.png",
      "/node.png",
      "/gulp.png",
      "/react.png",
      "/css.png",
      "/python.png",
      "/php.png",
      "/android.png",
      "/postgre.png",
      "/node.png",
      "/gulp.png",
      "/react.png",
      "/css.png",
      "/python.png",
      "/php.png",
    ].map((icon, index) => ( 
      <img
        key={`${i}-${index}`}
        src={icon}
        alt={`Tech ${index}`}
        className={styles.techIcon}
        draggable={false}
      />
    ))
  )}
</div>

        </div>
      </section>

      {/* Our Top Clients Section */}
      <section className={styles.clientsSection}>
        <h2 className={styles.sectionTitle}>Our Top Clients</h2>
        <p className={styles.clientsSubtitle}>Meet our happy clients</p>
        <div className={styles.scrollHintWrapper}>
          <div
            ref={clientRef}
            id="clients"
            className={`${styles.clientsLogos} ${clientVisible ? styles.wiggle : ""}`}
          >
            {[
              "/laser.png",
              "/fast.png",
              "/prim.png",
              "/cgrp-logo.png",
            ].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Client ${index}`}
                className={styles.clientLogo}
              />
            ))}
          </div>
        </div>
      </section>

{/* Footer Section */}
 <footer className={styles.footerSection}>
  <div className={styles.footerGrid}>
    <div className={styles.footerColumn}>
      <img src="/slogo.png" alt="Speedlink Logo" className={styles.footerLogo} />
      <p>
        Providing ICT solutions that make businesses stand out. We can provide you with the
        highest levels of technical expertise, strategic thinking, and hands-on skills.
      </p>
    </div>

    <div className={styles.footerColumn}>
      <h4>Services</h4>
      <ul>
        <li>Digital Services</li>
        <li>Cloud Services</li>
        <li>Networking Services</li>
        <li>Certified Training</li>
      </ul>
    </div>

    <div className={styles.footerColumn}>
      <h4>Quick Links</h4>
      <ul>
        <li>Our Products</li>
        <li>Case Studies</li>
        <li>Who we are</li>
        <li>Why choose us</li>
        <li>What we do</li>
        <li>Meet our Team</li>
      </ul>
    </div>

    <div className={styles.footerColumn}>
      <h4>Locate us</h4>
      <p>
        Road 6 Extension, Okey Wali Estate,<br />
        Rumualogu, Port Harcourt, Rivers State
      </p>
      <div className={styles.contactBox}>
        <i className="fas fa-phone"></i> <span>tel: +2349167716220</span>
      </div>
      <div className={styles.contactBox}>
        <i className="fas fa-envelope"></i> <span>info@speedlinkng.com</span>
      </div>
      <div className={styles.socialIcons}>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-linkedin-in"></i>
      </div>
    </div>
  </div>
<div className={styles.footerGrid}>
    {/* ...your four columns stay the same here... */}
  </div>

  {/* Copyright bar at the very bottom */}
  <div className={styles.footerBottom}>
    Copyright © 2022 - {new Date().getFullYear()} Speedlink Hi-TECH Solutions Limited
  </div>
  
</footer>







    </div>
  );
}

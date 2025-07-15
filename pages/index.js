 // File: pages/index.js (Next.js)

import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [activeService, setActiveService] = useState("network");

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
                  width={150}
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


    </div>
  );
}

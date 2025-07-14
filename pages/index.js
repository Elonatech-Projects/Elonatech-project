 // File: pages/index.js (Next.js)

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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
                  We’re excited to announce that we’re now an official Pearson VUE testing center!
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
    </div>
  );
}
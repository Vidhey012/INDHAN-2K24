import { useState, useEffect } from 'react';
import './App.css';
import './App1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Container, Collapse } from 'react-bootstrap';
import image1 from './assets/image1.jpg';
import image2 from './assets/image2.jpg';
import image3 from './assets/image3.jpg';
import kishore from './assets/kishore.jpeg';
import krishna from './assets/Krishna.jpeg';
import kvrao from './assets/kvrao.jpeg';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';
import logo5 from './assets/logo5.png';
import logo6 from './assets/logo6.png';
import 'font-awesome/css/font-awesome.min.css';
import poster1 from './assets/poster1.jpg';
import poster2 from './assets/poster2.png';
import poster3 from './assets/poster3.png';
import poster4 from './assets/poster4.png';
import poster5 from './assets/poster5.png';
import poster6 from './assets/poster6.png';
import poster7 from './assets/poster7.png';
import poster8 from './assets/poster8.png';
import poster9 from './assets/poster9.png';
import poster10 from './assets/poster10.png';
import poster11 from './assets/poster11.jpg'
import so1 from './assets/so1.png'
import so2 from './assets/so2.png'
import so3 from './assets/so3.png'
import so4 from './assets/so4.jpeg'
import so5 from './assets/so5.png'
import so6 from './assets/so6.jpeg'
import so7 from './assets/so7.png'
import so8 from './assets/so8.png'
import so9 from './assets/so9.png'
import so10 from './assets/so10.png'
import so11 from './assets/so11.png'
import so12 from './assets/so12.png'
import so13 from './assets/so13.jpg'
import so14 from './assets/so14.png'
import ce from './assets/image1.jpeg'
import pe from './assets/image2.jpeg'
import sce from './assets/image3.jpeg'
import spe from './assets/image4.jpeg'
import sceg from './assets/image5.jpeg'
import speg from './assets/image6.jpeg'



function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleNavClick = (section: string) => {
    setActiveSection(section);
  };

  const deptImages = [image1, image2, image3];

  const galleryImages = [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster10, poster11];

  interface TeamMember {
    name: string;
    designation: string;
    mobile: string;
    image: string; // Image URL
  }

  const teamMembers: TeamMember[] = [
    // {
    //   name: "Mr. Dr. T. LAKSHMANA KISHORE",
    //   designation: "Head of the Department Chemical Engineering",
    //   mobile: "8897520595",
    //   image: kishore,
    // },
    // {
    //   name: "Mr. DR. K. KRISHNA BHASKAR",
    //   designation: "Head of the Department Petroleum Engineering",
    //   mobile: "9701027091",
    //   image: krishna,
    // },
    {
      name: "Mr. AJMEERA RAMESH",
      designation: "Asst. Prof. Chemical Engg.",
      mobile: "8919394146",
      image: ce,
    },
    {
      name: "Ms. PICHIKALA VARSHA",
      designation: "Asst. Prof. Petroleum Engg.",
      mobile: "7702891999",
      image: pe,
    },
    {
      name: "Mr. K. SATHYA SRIRAM",
      designation: "Final Year Chemical Engg.",
      mobile: "9391966834",
      image: sce,
    },
    {
      name: "Mr. SHAIK ABDUL ARIF",
      designation: "Final Year Petroleum Engg.",
      mobile: "7981276022",
      image: spe,
    },
    {
      name: "Ms. SEELA BHANUJA",
      designation: "Final Year Chemical Engg.",
      mobile: "8247666854",
      image: sceg,
    },
    {
      name: "Ms. A. L. DEEKSHITA",
      designation: "Final Year Petroleum Engg.",
      mobile: "8185893351",
      image: speg,
    },
  ];


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % deptImages.length);
  };
  const nextImage1 = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + deptImages.length) % deptImages.length
    );
  };
  const previousImage1 = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage1();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  interface DateItem {
    date: string;
    reason: string;
  }

  const importantDates: DateItem[] = [
    { date: '20 December, 2024', reason: 'Powerpoint prodiolgy last date of submission' },
    { date: '20 December, 2024', reason: 'Post pioneer last date of submission' },
    { date: '25 December, 2024', reason: "Last date for model mania" },
    { date: '25 December, 2024', reason: "Culturals participation" },
    { date: '27 December, 2024', reason: "Registration" },
    { date: '28 December, 2024', reason: "Openday fest" },
    { date: '28 December, 2024', reason: "Workshops" },
    { date: '29 December, 2024', reason: "Workshops" }


  ];


  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let foundSection = "Home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          foundSection = section.id;
        }
      });

      setActiveSection(foundSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">

      {/* Header Section */}
      <header className="header">
      <Navbar expand="xxl" sticky="top" variant="dark" className="w-100">
        <div className="container-fluid"> {/* Use container-fluid to ensure full width */}
          {/* Logo and Site Name */}
          <Navbar.Brand href="#Home" className="logo-container">
            <img src={logo2} alt="Logo" className="logo" />
            <span className="site-name">SPE - INDHAN 2K24</span>
          </Navbar.Brand>

          {/* Hamburger Menu and Collapsible Navbar */}
          <Navbar.Toggle aria-controls="navbar-nav" onClick={toggleMenu} />

          <Collapse in={isMenuOpen}>
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ml-auto">
                {/* Navigation Links - Centered */}
                <Nav className="mx-auto">
                  {["Home", "Dept", "Organizer", "About", "Events", "Gallery", "Abstract", "Dates", "Sponsorship", "Team", "Contact"].map((section) => (
                    <Nav.Link
                      href={`#${section}`}
                      key={section}
                      className={activeSection === section ? 'active' : ''}
                      onClick={() => handleNavClick(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Nav.Link>
                  ))}
                </Nav>
                {/* Registration Button - Right aligned */}
                <Button
                  variant="primary"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeQdGHxMjkwDB-E-eNFNlUjBr9XmuLW7x4j-JqB5bZAP5dnww/viewform"
                  className="registration-btn"
                >
                  Registration
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Collapse>
        </div>
      </Navbar>
    </header>


      <main className="main">

       {/* Home Section */}
<section id="Home" className="hero-section dark-background">
  <div className="container">
    <div className="row w-100">
      {/* Text Section */}
      <div className="home" data-aos="zoom-out">
        <h1>SPE - INDHAN 2024</h1>
        <p>Energy is our Vision. Energy is our Action</p>
        <div className="homep">
          <p>December 28, 2024 to December 29, 2024</p>
        </div>
      </div>
      {/* Image Section */}
      <div className="new">
        <div className="image-container">
          <img src={logo2} className="new-image" alt="New Image" />
        </div>
      </div>
    </div>
  </div>
</section>




        {/* Dept Section */}
        <section id="Dept" className="gallery-section">
          <div className="gallery-container">
            <h2>Department</h2>
            <div className="gallery-content">
              <img
                src={deptImages[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="gallery-image"
              />
              <button onClick={previousImage} className="arrow left-arrow">
                &lt;
              </button>
              <button onClick={nextImage} className="arrow right-arrow">
                &gt;
              </button>
            </div>
          </div>
        </section>

        {/* Organizer Container */}
        <section id="Organizer">
        <div className="organize-container">
          <div className="organize" data-aos="zoom-out">
            <h1>SPE - INDHAN 2K24</h1>
            <div className='datee'>
              <p className="date">
                {/* <i className="bi bi-calendar3"></i>{' '} */}
                <span className="date-text"><b>December 28, 2024 to December 29, 2024</b></span>
              </p>
            </div>
            <hr className="divider" />
            <p data-aos="fade-up" data-aos-delay="100" className="organizer-divide">
              <em>Organized by</em>
            </p>
            <div className="row">
              <div className="organizer-departments">
                <h3 data-aos="fade-up" className="organizer-departments-title">
                  Department of Chemical Engineering and <br />Department of Petroleum Engineering
                </h3>
                <p data-aos="fade-up" data-aos-delay="100" className="institution-org">
                  University College Of Engineering Kakinada(A)
                </p>
                <p className="university-name">
                  Jawaharlal Nehru Technological University Kakinada
                </p>
              </div>
            </div>

            <p className="association">
              <em>In association with</em>
            </p>

            <div className="logos">
              <img src={logo1} alt="Logo 1" className="logo-item" />
              <img src={logo3} alt="Logo 2" className="logo-item" />
              <img src={logo5} alt="Logo 3" className="logo-item" />
              <img src={logo4} alt="Logo 4" className="logo-item" />
              <img src={logo6} alt="Logo 5" className="logo-item" />
            </div>
          </div>
        </div>
        </section>

        {/* About Section */}
        <section id="About" className="box-container">
        
  <div className="box">
    <h3 className="heading">About SPE-INDHAN</h3>
    <p>SPE Indhan 2024 proudly presents it’s 8th edition of this prestigious national-
                level technical fest, designed to bring together the brightest minds in Chemical
                and Petroleum Engineering.The fest offers a platform for students to showcase
                their technical skills, enhance their practical knowledge, and engage in real-
                world challenges. With a series of exciting competitions, insightful workshops,
                and inspiring guest lectures, SPE Indhan 2024 promises to be an unforgettable
                experience. SPE Indhan 2024 is designed to ignite creativity, foster innovation,
                and prepare students for the future of energy and engineering. The event brings
                together industry leaders, academicians, and professionals to discuss cutting-
                edge technologies, trends, and solutions shaping the future of the energy sector.
                Whether you are an aspiring engineer, a student looking to enhance your
                technical expertise, or someone passionate about sustainability and innovation in
                the energy domain, SPE Indhan 2024 is the place to be.</p>
  </div>
  <div className="box">
    <h3 className="heading">About JNTUK</h3>
    <p className="content">Jawaharlal Nehru Technological University Kakinada (JNTUK), established in 1946 stands as one of India’s premier institutions for technical education.
                Located in the historic city of Kakinada, Andhra Pradesh, JNTUK has evolved
                into a center of academic excellence and research. The university is
                renowned for offering a wide range of undergraduate, postgraduate and
                doctoral programs in engineering, technology, management and allied
                sciences. JNTUK is committed to fostering innovation, research and
                leadership in the fields of science and engineering. With state-of-the-art
                infrastructure, industry-oriented curriculum and a strong emphasis on
                research, the university continues to produce highly skilled professionals who
                contribute to national and global advancements. JNTUK's lush green campus,
                modern laboratories and strong industry-academia partnerships provide
                students with a holistic environment for academic and personal growth.</p>
  </div>
  <div className="box">
    <h3 className="heading">About UCEK(A)</h3>
    <p className="content">University College of Engineering Kakinada (Autonomous), a
                constituent college of Jawaharlal Nehru Technological University
                Kakinada (JNTUK), is a prestigious institution with a legacy dating
                back to 1946. Located in the coastal city of Kakinada, Andhra
                Pradesh, UCEK(A) is known for its academic excellence, cutting-edge
                research and industry-driven programs. As an autonomous institution,
                UCEK(A) offers a broad range of undergraduate, postgraduate and
                doctoral programs across various engineering disciplines, including
                Petroleum Engineering, Chemical Engineering, Civil, Mechanical,
                Electrical and Computer Science. The college is equipped with state-ofthe-art laboratories, modern infrastructure, and a vibrant campus that
                fosters innovation and practical learning.</p>
  </div>
  <div className="box">
    <h3 className="heading">About Department of Chemical Engineering</h3>
    <p className="content">The Department of Chemical Engineering offers a four-year B.Tech. degree program, focused on
                both fundamental and advanced principles of chemical engineering, equipping students to excel
                in a wide range of industries, including the energy, petrochemicals, chemical processes, Bulk
                drugs & pharmaceuticals, food processing, metallurgy, and environmental management etc. The
                program emphasizes sustainable chemical processes, research & development, and innovation,
                ensuring that students gain a comprehensive understanding of the gamut of chemical engineering.
                The curriculum is well designed by industrial experts and academicians from premier institutes
                incorporating industrial visits and internships. With well-established laboratories, the department
                integrates practical learning to enhance students' skills. Actively engaged in cutting-edge
                research, the department explores areas such as Process Design, Reaction Engineering, Modeling
                and Simulation, Biochemical Engineering, Process Safety and Waste Management, addressing
                real-world industrial challenges and contributing to impactful solutions.</p>
  </div>
  <div className="box">
    <h3 className="heading">About Department of Petroleum Engineering</h3>
    <p className="content">The Department of Petroleum Engineering offers a four-year B.Tech. degree program,
                focused on upstream petroleum engineering. The curriculum covers vital areas such as
                Exploration, Well Logging, Drilling, Reservoir Engineering, Oil and Gas Production,
                Enhanced Oil Recovery Techniques (EORT), Natural Gas Hydrates, Coalbed Methane,
                Shale gas, Subsea Technology, and Sequestration of Carbon dioxide. With good
                laboratory facilities and experienced faculty, the department provides students with
                hands-on training and exposure to the latest energy technologies. Strategic
                partnerships with leading oil and gas companies and research organizations ensure
                that graduates are well-prepared to meet the dynamic challenges of the global energy
                sector. This holistic approach provides students with the skills and knowledge
                necessary to excel in a rapidly evolving industry.</p>
  </div>


  <h2 className="heading1">From Convener’s Desk</h2>
  <div className="box">
    <div className="box-content">
      <div className="image-caption">
        <img src={kishore} alt="Image 1" className="image" />
        <p className="caption">Dr. T. Lakshmana Kishore</p>
      </div>
      <div className="text-content1">
        <p>It is with great pride and enthusiasm that I welcome you to
                    SPE INDHAN: A National Tech Fest and Energy Symposium.
                    This remarkable event, offers an exciting platform for students
                    to explore and engage with the forefront of energy and
                    engineering innovation. SPE INDHAN is not just an
                    opportunity for technical learning but also a celebration of
                    creativity and problem-solving, featuring workshops, keynote
                    lectures and competitions. It is a space where young minds
                    can interact with industry experts, share knowledge and
                    contribute to the evolving energy landscape. I extend my
                    warm invitation to all students, faculty and industry
                    professionals to be a part of this unique fest. Together, let us
                    drive forward the spirit of innovation and collaboration.</p>
      </div>
    </div>
  </div>

  <div className="box">
    <div className="box-content">
      <div className="image-caption">
        <img src={krishna} alt="Image 2" className="image" />
        <p className="caption">Dr. K. Krishna Bhaskar</p>
      </div>
      <div className="text-content1">
        <p>It gives me immense pleasure to welcome you all to SPE
                    INDHAN: A National Tech Fest and Energy Symposium, an
                    event that stands as a testament to the passion and
                    dedication of our student community. SPE INDHAN will
                    provide a platform for young minds to showcase their talent,
                    engage in competitions, workshops and discussions that
                    span across the latest advancements in energy, petroleum,
                    and chemical engineering. It is a step towards building
                    bridges between academia and industry, nurturing
                    innovation and inspiring future leaders of the energy world. I
                    invite students, professionals and faculty members from
                    various institutions to join us in making this event a grand
                    success. Let us unite in our shared vision of a sustainable
                    energy future..</p>
      </div>
    </div>
  </div>
  <h2 className="heading1">From Faculty Advisor's Desk</h2>
  <div className="box w-75">
    <div className="box-content">
      <div className="image-caption">
        <img src={kvrao} alt="Image 3" className="image" />
        <p className="caption">Prof. K.V. Rao</p>
      </div>
      <div className="text-content1">
        <p>Dear Students, Professionals and Enthusiasts,
                    It is with immense pride and enthusiasm that I welcome you
                    to SPE INDHAN: A National Tech Fest and Energy
                    Symposium. SPE INDHAN serves as a platform to bridge the
                    gap between industry and academia, offering participants a
                    unique opportunity to gain insights from eminent speakers,
                    showcase their talents through competitions and engage in
                    interactive workshops. The theme reflects our commitment to
                    fostering a sustainable and technologically advanced future
                    in energy. I encourage all participants to make the most of
                    this opportunity, network with like-minded individuals and
                    immerse themselves in the rich learning experience this event
                    offers. Let us come together to inspire, innovate and ignite
                    the energy sector's future.</p>
      </div>
    </div>
  </div>
</section>

        {/* Events Section */}

<section id="Events" className="events-section">
<h2 className="heading1 pt-5 pb-5">Events</h2>
  <div className='eventn'>
    <div className="event-list">
      <div className="event">
        <h3>GEO LOGX</h3>
        <p>Get ready to drill into the world of well logging and formation evaluation! Geologx presents a challenging competition for students to showcase your skills in interpreting geological data. Will your team strike oil and emerge victorious?</p>
      </div>

      <div className="event">
        <h3>BRAIN STORM</h3>
        <p>Get ready to put your knowledge to the test! Brain Storm, the ultimate quiz competition, challenges you to tackle general and technical rounds. Will you emerge as the champion and claim the title of ultimate quiz whiz?</p>
      </div>

      <div className="event">
        <h3>LITHOLAB</h3>
        <p>Uncover the secrets of the earth! Litholab is a hands-on challenge where you'll identify and analyze rocks and their properties. Can you crack the code and become a rockstar?</p>
      </div>

      <div className="event">
        <h3>MODEL MANIA</h3>
        <p>Model Mania is the ultimate platform for innovators to bring their ideas to life. Whether you're a tech enthusiast, a budding engineer, or a creative thinker, this is your chance to showcase your working models and projects. Let your imagination run wild, push the boundaries of technology, and get ready to inspire and amaze with your ingenuity!</p>
      </div>

      <div className="event">
        <h3>LAYERS & DROPLETS</h3>
        <p>Mix, match, and measure your way to victory! Layers & Droplets is a thrilling competition that puts your chemical engineering skills to the test with density and titration challenges. Can you accurately mix and measure to emerge as the champion?</p>
      </div>

      <div className="event">
        <h3>PROCESS PATHWAY</h3>
        <p>Piece together the puzzle of process perfection! Process Pathway challenges deals with arrangement of process flow diagram in the correct order. Can you optimize the flow and emerge victorious?</p>
      </div>

      <div className="event">
        <h3>POSTER PIONEERS</h3>
        <p>Unleash your creativity and showcase your research! Poster Pioneers invites students to present innovative ideas and solutions on petroleum engineering, chemical engineering, and the latest energy trends. Share your vision and compete for top honors! The list of topics are given in the last flap.</p>
      </div>

      <div className="event">
        <h3>CULTURAL CRESCENDO</h3>
        <p>Immerse yourself in a vibrant tapestry of music, dance and art! Cultural Crescendo is a celebration of diversity and creativity. Join us for an unforgettable evening of entertainment and cultural exchange!</p>
      </div>

      <div className="event">
        <h3>POWERPOINT PRODIGY</h3>
        <p>Transform your ideas into engaging presentations! PowerPoint Prodigy is a platform for students to showcase their knowledge and creativity on petroleum engineering, chemical engineering, and energy trends. Can you captivate the audience and emerge as the prodigy? The list of topics are given in the next flap.</p>
      </div>

      <div className="event">
        <h3>WORKSHOPS</h3>
        <p>Unlock the secrets of the oil and gas industry with our expert-led workshops. Renowned speakers across the country will share their insights and expertise, providing a unique learning experience. Gain valuable knowledge and networking opportunities to kick-start your career in the energy sector.</p>
        <ul>
          <li>Oil and Gas Pipelines</li>
          <li>Deep Water Field Development</li>
          <li>Design and Operation of Compact Heat Exchangers</li>
        </ul>
      </div>
    </div>
  </div>
</section>

        {/* gallery Section */}
        <section id="Gallery" className="gallery-section1">
          <div className="gallery-container1">
            <h2>Poster Gallery</h2>
            <div className="gallery-content1">
              <img
                src={galleryImages[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="gallery-image1"
              />
              <button onClick={previousImage1} className="arrow1 left-arrow1">
                &lt;
              </button>
              <button onClick={nextImage1} className="arrow1 right-arrow1">
                &gt;
              </button>
            </div>
          </div>
        </section>


        {/* Abstract Section */}
        <section id="Abstract" className="abstract-section">
          {/* <h2>Abstract</h2> */}
          <div className="abstract-card">
            <div className="important-notes-container">
              <div className="important-notes-card">
                <h3 className='Inote pt-5 pb-5'>Important Notes</h3>
                
                <ul>
                  <li>
                    <p>
                  Please read the below instructions carefully before making
                  payment and registration.
                </p>
                  </li>
                  <li>
                    Candidates are advised to pay first and then go through the
                    registration process.
                  </li>
                  <li>
                    All participants must submit the registration fee through
                    NEFT/SWIFT/Wire Transfer or UPI (Only for Indian Participants).
                    The details of the account and UPI are given below.
                  </li>
                  <li>
                    Once the payment has been made, the authors need to fill out
                    the REGISTRATION FORM for their confirmation.
                  </li>
                  <li>
                    Only after filling out the registration form, your registration
                    will be COMPLETED.
                  </li>
                  <li>Certificate will be issued to the registered participants ONLY.</li>
                  <li>
                    Confirmation mail will be sent to participants after
                    verification of the payment. It may take 2 working days to get
                    confirmation from us.
                  </li>
                </ul>
              </div>
            </div>

            <div className="abs-registration-btn">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeQdGHxMjkwDB-E-eNFNlUjBr9XmuLW7x4j-JqB5bZAP5dnww/viewform"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Please Click Here for Registration
              </a>
            </div>

            <div className="bank-details">
              <h3 className='bDetails'>Bank Details</h3>
              <table>
                <tbody>
                  <tr>
                    <td><strong>Bank</strong></td>
                    <td>State Bank of India</td>
                  </tr>
                  <tr>
                    <td><strong>Name of the Account</strong></td>
                    <td>SPE INDHAN JNTUK</td>
                  </tr>
                  <tr>
                    <td><strong>Account Number</strong></td>
                    <td>37619480436</td>
                  </tr>
                  <tr>
                    <td><strong>IFSC Code</strong></td>
                    <td>SBIN0001358</td>
                  </tr>
                  <tr>
                    <td><strong>Branch</strong></td>
                    <td>
                      JNTU Kakinada Engineering College, Kakinada, Andhra Pradesh – 533003
                    </td>
                  </tr>
                  <tr>
                    <td><strong>For Registrations</strong></td>
                    <td>Total Registration: Rs. 500/-</td>
                  </tr>
                  <tr>
                    <td><strong>Basic Registration</strong></td>
                    <td>Rs. 100/-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* Dates Section */}
        <section id="Dates" className="imp_section">
          <h2 className="section-heading">Important Dates</h2>
          <div className="content-wrapper">
            <div className="dates-container">
              {importantDates.map((item, index) => (
                <div className="date-item" key={index}>
                  <span className="icon">📅</span>
                  <div className="date-details">
                    <span className="date-reason">
                      <span className="date">{item.date}</span>
                      <span className="reason">{item.reason}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* Sponsor Section */}
        <section id="Sponsorship" className="section sponsorship-section">
          <h2>Our Partners</h2>
          <div className="sponsorship-card">
            <div className="sponsorship-logos">
              <img src={so1} alt="Logo 1" />
              <img src={so2} alt="Logo 2" />
              <img src={so3} alt="Logo 3" />
              <img src={so4} alt="Logo 4" />
              <img src={so5} alt="Logo 5" />
              <img src={so6} alt="Logo 6" />
              <img src={so7} alt="Logo 7" />
              <img src={so8} alt="Logo 8" />
              <img src={so9} alt="Logo 9" />
              <img src={so10} alt="Logo 10" />

              <div className="logo-with-text">
                <img src={so11} alt="Logo 11" className="logo-image" />
                <div className="logo-text">
                  <p>AU Chem</p>
                  <p>Engg.</p>
                  <p>Alumni</p>
                </div>
              </div>

              <div className="logo-with-text">
                <img src={so12} alt="Logo 12" className="logo-image" />
                <div className="logo-text">
                  <p>JNTUK</p>
                  <p>CHEM & PE</p>
                  <p>Alumni</p>
                </div>
              </div>

              <img src={so13} alt="Logo 13" />
              <img src={so14} alt="Logo 14" />
            </div>
          </div>
        </section>


        {/* Team Section */}
        <section id="Team" className="team-section">
          <h2 className="team-title">OUR TEAM</h2>
          <div className="team-container">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <img src={member.image} alt={member.name} className="team-image" />
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-designation">{member.designation}</p>
                  <p className="team-mobile">Mobile: {member.mobile}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Map Section */}
<section id="Contact" className="section contact-section">
  <h2>Contact</h2>
  <div className="contact-container">
    {/* Map Section */}
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.901275072345!2d82.24241339999999!3d16.9794058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3828422f4f62b5%3A0x285fe5176446d9aa!2sDepartment%20Of%20Petroleum%20And%20Petrochemical%20Engineering%20PARKING!5e0!3m2!1sen!2sin!4v1733857061659!5m2!1sen!2sin"
        loading="lazy"
      ></iframe>
    </div>

    {/* Contact Details Section */}
    <div className="contact-info-container">
      <div className="contact-info">
        <h3>Department of Petroleum Engineering and Department of Chemical Engineering</h3>
        <p>
          <i className="fa fa-map-marker"></i> University College of Engineering(A), Kakinada, Andhra Pradesh - 533003
        </p>
      </div>

      <div className="contact-info">
        {/* <h3>Contact Us</h3> */}
        <div className="social-links">
          <div className="email">
            <p>
              <i className="fa fa-envelope fa-lg"></i>
              <a href="mailto:speindhan2k24@gmail.com">speindhan2k24@gmail.com</a>
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/speindhan2k24/profilecard/?igsh=MWNsbG9odGR0aWZlZg==" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://x.com/speindhan?t=fdJqpBuiidgdf6DGdMjWjQ&s=09" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="https://whatsapp.com/channel/0029VauyiNy3WHTNpcPvGB2x" target="_blank" rel="noopener noreferrer">
              <i className="fa fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      </main>
    </div >
  );
}

export default App;

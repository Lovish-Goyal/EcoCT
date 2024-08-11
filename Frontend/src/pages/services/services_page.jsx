import styles from "./servicespage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRecycle,faBoxes, faTrashAlt, faTools, faCogs, faBatteryFull, faCertificate, faComments, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
function ServicesPage() {

    const services = [
        { title: 'E-Waste Collection', icon: faBoxes, description: 'Collection and transportation of electronic waste from various locations.' },
        { title: 'E-Waste Recycling', icon: faRecycle, description: 'Recycling electronic waste to recover valuable materials and reduce environmental impact.' },
        { title: 'Data Destruction', icon: faTrashAlt, description: 'Securely destroying data from old electronic devices to protect sensitive information.' },
        { title: 'Device Refurbishment', icon: faTools, description: 'Repairing and refurbishing electronic devices for reuse.' },
        { title: 'Component Recovery', icon: faCogs, description: 'Extracting reusable components from electronic waste for resale or repurposing.' },
        { title: 'Battery Recycling', icon: faBatteryFull, description: 'Specialized recycling process for batteries to prevent pollution and recover materials.' },
        { title: 'Compliance & Certification', icon: faCertificate, description: 'Ensuring that e-waste management practices meet legal and environmental standards.' },
        { title: 'Consulting Services', icon: faComments, description: 'Providing expert advice on e-waste management and sustainability practices.' },
        { title: 'Educational Workshops', icon: faChalkboardTeacher, description: 'Conducting workshops to raise awareness about e-waste management and recycling.' },
      ];

    return <>
    <div className={styles.body_container}>
    <div className={styles.page_heading}>Our<span> Services</span></div>
    <div className={styles.small_intro}>Explore our range of services designed to meet your unique needs with precision and excellence. From innovative solutions and expert support to reliable management, we are committed to delivering top-notch results that drive your success. Partner with us and experience the difference that quality and dedication can make for your business.</div>
    <div className={styles.list_items}>
     {services.map((service, index) => (
          <div className={styles.box} key={index}>
            <div className={styles.img_box}>
              <FontAwesomeIcon icon={service.icon} size="2x" />
            </div>
            <div className={styles.detail_box}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
    </div>
    </div></>
}

export default ServicesPage;
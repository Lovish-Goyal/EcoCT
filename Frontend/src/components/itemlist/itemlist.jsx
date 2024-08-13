import React, { useState } from 'react';
import styles from './itemlist.module.css';

function TaskList() {
    const items = [
        {
            Scrap_image: "https://5.imimg.com/data5/SELLER/Default/2021/6/QL/NJ/ZA/55543718/fb-img-1617907919889-jpg-500x500.jpg",
            Scrap_Type: "Plastic",
            Material: "Mobile",
            Contact_No: "98564785XX",
            Payment_Mode: "Online/Offline",
            Origin: "India",
            Price: "120",
        },
        {
            Scrap_image: "https://images.jdmagicbox.com/quickquotes/images_main/laptop-scrap-386910480-le6kg.jpg",
            Scrap_Type: "Metal",
            Material: "Laptop",
            Contact_No: "87549621XX",
            Payment_Mode: "Online",
            Origin: "China",
            Price: "220",
        },
        {
            Scrap_image: "https://resource-recycling.com/e-scrap/wp-content/uploads/sites/2/2016/03/rsz_crtpileistock_000021599558large-300x201.jpg",
            Scrap_Type: "Glass",
            Material: "Monitor",
            Contact_No: "65874021XX",
            Payment_Mode: "Offline",
            Origin: "Japan",
            Price: "90",
        },
        {
            Scrap_image: "https://2.imimg.com/data2/XQ/PF/IMFCP-3261088/680951.jpg",
            Scrap_Type: "Plastic",
            Material: "Keyboard",
            Contact_No: "6587201XX",
            Payment_Mode: "Online/Offline",
            Origin: "South Korea",
            Price: "70",
        },
        {
            Scrap_image: "https://5.imimg.com/data5/SELLER/Default/2022/9/EE/TA/AH/147028108/computer-printer-scrap.JPEG",
            Scrap_Type: "Metal",
            Material: "Printer",
            Contact_No: "68954720XX",
            Payment_Mode: "Online",
            Origin: "India",
            Price: "110",
        },
        {
            Scrap_image: "https://lh4.googleusercontent.com/proxy/sQIulTpjgmdERIfQhctl8RCWvx0zAU3HdCIpwAwGQVpBs_M3c3aAnNPHv428QYZGhzz3vP6ub2HzQSx1TsDKssbGRdPK1GK7AdiLGsrgrw",
            Scrap_Type: "Plastic",
            Material: "Mouse",
            Contact_No: "98653201XX",
            Payment_Mode: "Offline",
            Origin: "Taiwan",
            Price: "140",
        },
        {
            Scrap_image: "https://images.jdmagicbox.com/quickquotes/images_main/hard-disk-scrap-2189001598-pfjw9wk6.jpg",
            Scrap_Type: "Metal",
            Material: "Hard Drive",
            Contact_No: "98725801XX",
            Payment_Mode: "Online/Offline",
            Origin: "Singapore",
            Price: "210",
        },
        {
            Scrap_image: "https://5.imimg.com/data5/SELLER/Default/2024/5/415088497/IR/RN/RB/31142437/crt-tv-scrap-1-500x500.jpg",
            Scrap_Type: "Glass",
            Material: "TV",
            Contact_No: "98653296XX",
            Payment_Mode: "Online",
            Origin: "Japan",
            Price: "50",
        },
        {
            Scrap_image: "https://img3.exportersindia.com/product_images/bc-full/2020/3/4053957/battery-scrap-1584521258-5342379.jpeg",
            Scrap_Type: "Plastic",
            Material: "Battery",
            Contact_No: "98741025XX",
            Payment_Mode: "Offline",
            Origin: "India",
            Price: "170",
        },
        {
            Scrap_image: "https://5.imimg.com/data5/SELLER/Default/2024/4/409974267/FG/GA/EJ/140773771/wifi-router-scrap-500x500.jpg",
            Scrap_Type: "Metal",
            Material: "Router",
            Contact_No: "98658401XX",
            Payment_Mode: "Online",
            Origin: "South Korea",
            Price: "210",
        },
        {
            Scrap_image: "https://www.nstscrap.com/assets/images/services/chargers-adapters-scrap.webp",
            Scrap_Type: "Plastic",
            Material: "Charger",
            Contact_No: "96320154XX",
            Payment_Mode: "Online/Offline",
            Origin: "China",
            Price: "240",
        },
        {
            Scrap_image: "https://c8.alamy.com/comp/2ATB1DY/electronic-scrap-different-phones-and-smartphones-not-suitable-for-repair-2ATB1DY.jpg",
            Scrap_Type: "Glass",
            Material: "Smartphone",
            Contact_No: "87458957XX",
            Payment_Mode: "Offline",
            Origin: "Japan",
            Price: "60",
        },
        {
            Scrap_image: "https://images.squarespace-cdn.com/content/v1/527ba911e4b088797b06ebdb/1394046155223-BCTLW6GLCC9BCKKWTJ65/broken-tablet-computer-containing-gold-and-other-precious-metals_specialty-metals.jpg",
            Scrap_Type: "Metal",
            Material: "Tablet",
            Contact_No: "98652001XX",
            Payment_Mode: "Online",
            Origin: "India",
            Price: "80",
        },
        {
            Scrap_image: "https://images.jdmagicbox.com/quickquotes/images_main/headphones-scrap-2215036120-rnywtj5t.jpg",
            Scrap_Type: "Plastic",
            Material: "Headphones",
            Contact_No: "65897401XX",
            Payment_Mode: "Offline",
            Origin: "South Korea",
            Price: "160",
        },
        {
            Scrap_image: "https://scrapyards.io/wp-content/uploads/2024/02/Speakers.jpeg",
            Scrap_Type: "Metal",
            Material: "Speaker",
            Contact_No: "98754852XX",
            Payment_Mode: "Online/Offline",
            Origin: "China",
            Price: "230",
        },
        {
            Scrap_image: "https://images.jdmagicbox.com/quickquotes/images_main/camera-scrap-2214364694-8gkl62uj.jpg",
            Scrap_Type: "Glass",
            Material: "Camera",
            Contact_No: "98754852XX",
            Payment_Mode: "Online",
            Origin: "Japan",
            Price: "220",
        },
        {
            Scrap_image: "https://www.liveabout.com/thmb/aqRBNJ4nRSq6g6jk4oz9vVQwC4w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-533588126-57ad08c83df78cd39ca4b2d8.jpg",
            Scrap_Type: "Plastic",
            Material: "Modem",
            Contact_No: "87456214XX",
            Payment_Mode: "Offline",
            Origin: "India",
            Price: "100",
        },
        {
            Scrap_image: "https://5.imimg.com/data5/SELLER/Default/2023/11/360402999/MO/FM/NV/32587659/computer-server-scrap-500x500.jpeg",
            Scrap_Type: "Metal",
            Material: "Server",
            Contact_No: "87563241XX",
            Payment_Mode: "Online/Offline",
            Origin: "Singapore",
            Price: "30",
        },
        {
            Scrap_image: "https://images.jdmagicbox.com/quickquotes/images_main/computer-scrap-376628603-3d04v.jpg",
            Scrap_Type: "Plastic",
            Material: "Projector",
            Contact_No: "98657452XX",
            Payment_Mode: "Online",
            Origin: "China",
            Price: "50",
        },
        {
            Scrap_image: "https://media.sciencephoto.com/h1/00/08/13/h1000813-800px-wm.jpg",
            Scrap_Type: "Glass",
            Material: "Digital Watch",
            Contact_No: "98752101XX",
            Payment_Mode: "Offline",
            Origin: "Japan",
            Price: "300",
        }
    ];    

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
  });
  const [status, setStatus] = useState('');

  const handleButtonClick = (item) => {
    setSelectedItem(item);
    setFormData({
      name: '',
      mobile: '',
    });
    setIsFormVisible(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking successful!")
    console.log('Form submitted with:', formData);
    setStatus('Booking successful!');
    setIsFormVisible(false); // Hide form after submission
  };

  return (
    <>
      <div className={styles.itemlistContainer}>
        {items.map((item, index) => (
          <div className={styles.item_box} key={index}>
            <div className={styles.column1}>
              <div className={styles.Price}>Rs: {item.Price}/Kg</div>
              <img className={styles.Scrap_image} src={item.Scrap_image} alt="" />
            </div>
            <div className={styles.column2}>
              <div className={styles.Scrap_content}>
                <div className={styles.Scrap_Type}>Scrap_Type: {item.Scrap_Type}</div>
                <div className={styles.Material}>Material: {item.Material}</div> 
                <div className={styles.Contact_No}>Contact No: {item.Contact_No}</div>
                <div className={styles.Payment_Mode}>Payment: {item.Payment_Mode}</div>
                <div className={styles.Origin}>Origin: {item.Origin}</div>
              </div>
              <button className={styles.bookButton} onClick={() => handleButtonClick(item)}>Book Now</button>
            </div>
          </div>
        ))}
      </div>

      {isFormVisible && selectedItem && (
        <div className={styles.formPopup}>
          <div className={styles.formContainer}>
            <h3>Scrap Material:{selectedItem.Material}</h3>
            <h3>Price:{selectedItem.Price}</h3>
            <h3>Enter Your Details:</h3>
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="mobile">Mobile Number:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className={styles.submitButton}>Submit</button>
            </form>
            {status && <p className={styles.statusMessage}>{status}</p>}
          </div>
        </div>
      )}
    </>
  );
}

export default TaskList;
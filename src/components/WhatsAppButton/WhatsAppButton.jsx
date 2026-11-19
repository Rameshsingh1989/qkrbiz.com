import { whatappImage as ImagesUrl_whatappImage } from "../../assets/images";

const WhatsAppButton = () => {
  const phone = "917428174445";
//   const message = `Hello Sir/Ma’am,</br>
// This is Aditya from QkrHR, India’s No. 1 HRMS software solution. How may I assist you today regarding our HRMS and Field Tracking solutions?`;

const message =
  "Hello Sir/Ma’am,\n" +
  "This is Aditya from QkrHR, India’s No. 1 HRMS software solution.\n" +
  "How may I assist you today regarding our HRMS and Field Tracking solutions?";

  // const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  
  const url = `https://wa.me/${phone}`;

  return (
    <div className="mt-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsappFloat}>
        <img loading="lazy" style={styles.imgWidth} src={ImagesUrl_whatappImage} alt="WhatsApp"/>
        <span style={styles.textWhite}>Message us on WhatsApp</span>
        
      </a>
    </div>
  );
};

export default WhatsAppButton;

const styles = {
  whatsappFloat:{ display: "flex", flexDirection: "row", alignItems: "center",justifyContent: "start" },
  textWhite: { color: "#ffffff", fontSize:"1rem", },
  imgWidth: { width:"35px", height:"35px", color: "#ffffff",paddingRight:"0.75rem" },
}

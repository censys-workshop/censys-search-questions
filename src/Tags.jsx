import {
  faGlobe,
  faTag,
  faLaptopCode,
  faCertificate,
  faVirus,
  faServer,
  faDesktop,
  faSitemap,
  faHashtag,
  faIndustry,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";

const tags = [
  { name: "Geolocation", icon: faGlobe },
  { name: "Operating System", icon: faLaptopCode },
  { name: "Service", icon: faServer },
  { name: "Software", icon: faDesktop },
  { name: "Web Technology", icon: faSitemap },
  { name: "TLS", icon: faCertificate },
  { name: "Hash", icon: faHashtag },
  { name: "Label", icon: faTag },
  { name: "Malware", icon: faVirus },
  { name: "SCADA", icon: faIndustry },
  { name: "IoT", icon: faLightbulb },
];

export default tags;

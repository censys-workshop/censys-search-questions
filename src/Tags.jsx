import {
  faCertificate,
  faDesktop,
  faGlobe,
  faHashtag,
  faIndustry,
  faLaptopCode,
  faLightbulb,
  faRoute,
  faServer,
  faSitemap,
  faTag,
  faVirus,
  faNetworkWired,
  faObjectGroup,
} from "@fortawesome/free-solid-svg-icons";

const tags = [
  { name: "Geolocation", shortName: "Geo", icon: faGlobe },
  { name: "Autonomous System", shortName: "AS", icon: faRoute },
  { name: "IP Address", shortName: "IP", icon: faNetworkWired },
  { name: "Operating System", shortName: "OS", icon: faLaptopCode },
  { name: "Service", icon: faServer },
  { name: "Software", icon: faDesktop },
  { name: "Web Technology", shortName: "Web", icon: faSitemap },
  { name: "TLS", icon: faCertificate },
  { name: "Hash", icon: faHashtag },
  { name: "Label", icon: faTag },
  { name: "Nested", icon: faObjectGroup },
  { name: "Malware", icon: faVirus },
  { name: "SCADA", icon: faIndustry },
  { name: "IoT", icon: faLightbulb },
];

export default tags;

const tigerReserves = [
  {
    name: "Periyar National Park",
    location: "Kerala",
    infoUrl: "https://www.keralatourism.org/periyar-national-park/"
  },
  {
    name: "Kanha National Park",
    location: "Madhya Pradesh",
    infoUrl: "https://mptourism.com/kanha-national-park.html"
  },
  {
    name: "Manas National Park",
    location: "Assam",
    infoUrl: "https://whc.unesco.org/en/list/338/"
  },
  {
    name: "Namdapha National Park",
    location: "Arunachal Pradesh",
    infoUrl: "https://www.arunachalbirdclub.org/namdapha-national-park/"
  },
  {
    name: "Valmiki National Park",
    location: "Bihar",
    infoUrl: "https://wildlifeinstituteofindia.org/valmiki-national-park-and-tiger-reserve/"
  },
  {
    name: "Bandipur Tiger Reserve",
    location: "Karnataka",
    infoUrl: "https://bandipurtigerreserve.in/"
  },
  {
    name: "Sariska Tiger Reserve",
    location: "Rajasthan",
    infoUrl: "https://www.rajasthantourism.com/destinations/sariska-national-park"
  },
  {
    name: "Ranthambore National Park",
    location: "Rajasthan",
    infoUrl: "https://www.ranthamborenationalpark.com/"
  },
  {
    name: "Bhadra Wildlife Sanctuary",
    location: "Karnataka",
    infoUrl: "https://www.karnatakaforest.gov.in/bhadra-wildlife-sanctuary"
  },
  {
    name: "Orang Tiger Reserve",
    location: "Assam",
    infoUrl: "https://orangtigerreserve.assam.gov.in/"
  },
  {
    name: "Bandhavgarh National Park",
    location: "Madhya Pradesh",
    infoUrl: "https://mptourism.com/bandhavgarh-national-park.html"
  },
  {
    name: "Indravati Tiger Reserve",
    location: "Chhattisgarh",
    infoUrl: "https://www.chhattisgarhtourism.net/indravati-national-park.html"
  },
  {
    name: "Kalakkad Mundanthurai Tiger Reserve",
    location: "Tamil Nadu",
    infoUrl: "https://www.tneuf.org/kalakad-mundanthurai-tiger-reserve/"
  },
  {
    name: "Kaziranga National Park",
    location: "Assam",
    infoUrl: "https://kaziranganationalpark.in/"
  },
  {
    name: "Dudhwa National Park",
    location: "Uttar Pradesh",
    infoUrl: "https://uptourism.gov.in/dudhwa-national-park/"
  },
  {
    name: "Pench Tiger Reserve",
    location: "Madhya Pradesh & Maharashtra",
    infoUrl: "https://mptourism.com/pench-national-park.html"
  },
  {
    name: "Tadoba Andhari Tiger Reserve",
    location: "Maharashtra",
    infoUrl: "https://tadoba.org/"
  },
  {
    name: "Pench National Park",
    location: "Madhya Pradesh",
    infoUrl: "https://mptourism.com/pench-national-park.html"
  },
  {
    name: "Kamlang Wildlife Sanctuary",
    location: "Arunachal Pradesh",
    infoUrl: "https://www.arunachalbirdclub.org/kamlang-wildlife-sanctuary/"
  },
  {
    name: "Similipal National Park",
    location: "Odisha",
    infoUrl: "https://www.similipal.org/"
  },
  {
    name: "Corbett Tiger Reserve",
    location: "Uttarakhand",
    infoUrl: "https://corbetttourism.gov.in/"
  },
  // Add remaining tiger reserves with their locations and info URLs
];


const tigerReserveList = document.getElementById("tiger-reserves");

tigerReserves.forEach((reserve, index) => {
  const listItem = document.createElement("li");
  listItem.textContent = reserve.name;
  listItem.style.backgroundColor = "#8be98c"; // Set a fixed orange color

  // Add location and information link
  const locationSpan = document.createElement("span");
  locationSpan.textContent = ` - ${reserve.location}`;
  locationSpan.style.fontSize = "0.8rem";
  listItem.appendChild(locationSpan);

  const infoLink = document.createElement("a");
  infoLink.href = reserve.infoUrl;
  infoLink.target = "_blank";
  infoLink.textContent = " (More Info)";
  infoLink.style.fontSize = "0.8rem";
  infoLink.style.marginLeft = "5px";
  listItem.appendChild(infoLink);

  tigerReserveList.appendChild(listItem);
});

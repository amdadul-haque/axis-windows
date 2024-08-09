import { FaWindowMaximize, FaSlidersH, FaDoorOpen, FaImage, FaHome, FaSeedling, FaCompressArrowsAlt, FaSistrix, FaChevronUp, FaChevronDown } from 'react-icons/fa';

export const windowOptions = [
  {
    title: "Double-Hung",
    description: "Double-hung windows feature two operable sashes that move up and down independently, allowing for versatile ventilation options. Their classic design complements various home styles, and the vertical sliding mechanism saves space.",
    image: "/images/windows/1.webp",
    icon: FaWindowMaximize // Example icon import and assignment
  },
  {
    title: "Sliding",
    description: "Sliding windows have one or more sashes that slide horizontally within the frame. They are easy to operate, provide ample ventilation, and are ideal for spaces with horizontal openings.",
    image: "/images/windows/2.webp",
    icon: FaSlidersH
  },
  {
    title: "Casement",
    description: "Casement windows are hinged at the side and open outward like a door, usually operated by a crank. They offer excellent ventilation and unobstructed views, making them a great choice for hard-to-reach areas.",
    image: "/images/windows/3.webp",
    icon: FaDoorOpen
  },
  {
    title: "Picture",
    description: "Picture windows are large, fixed-pane windows that provide expansive views and allow maximum natural light. They do not open, offering excellent insulation and energy efficiency, ideal for framing outdoor scenes in living areas.",
    image: "/images/windows/4.webp",
    icon: FaImage
  },
  {
    title: "Awning",
    description: "Awning windows are hinged at the top and open outward from the bottom, creating an awning-like effect. They provide good ventilation and protection from the rain, making them ideal for bathrooms and kitchens.",
    image: "/images/windows/5.jpg",
    icon: FaHome
  },
  {
    title: "Garden",
    description: "Garden windows extend outward from the home, creating a small, greenhouse-like space. They are perfect for growing plants and herbs indoors, adding light and a touch of nature to kitchens and dining areas.",
    image: "/images/windows/6.webp",
    icon: FaSeedling
  },
  {
    title: "Bay",
    description: "Bay windows project outward from the home's exterior wall, usually consisting of a central fixed window flanked by two operable windows. They create additional interior space and offer panoramic views, enhancing the room's aesthetics.",
    image: "/images/windows/7.webp",
    icon: FaCompressArrowsAlt
  },
  {
    title: "Bow",
    description: "Bow windows are similar to bay windows but consist of four or more equal-sized windows, creating a gentle, curved arch. They provide expansive views and a larger seating or display area, adding elegance to any room.",
    image: "/images/windows/8.webp",
    icon: FaSistrix
  },
];
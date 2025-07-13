export const projects = [
  {
    id: 1,
    title: "Corporate Conference",
    client: "TechCorp Vietnam",
    category: "Corporate",
    date: "2024-03-15",
    location: "Ho Chi Minh City",
    description:
      "A high-profile technology conference featuring keynote speakers, panel discussions, and networking sessions for industry leaders.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21621_450b9d6bbabceab04f216390c0bc6142.jpeg",
    highlights: ["500+ attendees", "Live streaming", "Interactive workshops"],
    technologies: ["Event Management", "Live Streaming", "Networking Platform"],
    status: "Completed",
    highlight: true,
    featured: true,
  },
  {
    id: 2,
    title: "Wedding Ceremony",
    client: "Nguyen Family",
    category: "Wedding",
    date: "2024-02-20",
    location: "Hanoi",
    description:
      "A beautiful traditional Vietnamese wedding ceremony with modern touches, featuring cultural performances and elegant décor.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21612_d99eb8ee5b703ab298415936c25ff301.jpeg",
    highlights: ["300 guests", "Cultural performances", "Custom décor"],
    technologies: [
      "Event Planning",
      "Cultural Integration",
      "Vendor Management",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: 3,
    title: "Product Launch",
    client: "Innovate Solutions",
    category: "Corporate",
    date: "2024-01-10",
    location: "Da Nang",
    description:
      "An innovative product launch event showcasing cutting-edge technology solutions with interactive demonstrations.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21627_74728b874e1c4cd1eb60c0a8455b6dcb.jpeg",
    highlights: ["200+ attendees", "Product demos", "Press coverage"],
    technologies: ["Product Launch", "Media Relations", "Demo Setup"],
    status: "Completed",
    featured: true,
  },
  {
    id: 4,
    title: "Annual Gala",
    client: "Charity Foundation",
    category: "Charity",
    date: "2023-12-15",
    location: "Ho Chi Minh City",
    description:
      "A prestigious charity gala raising funds for educational initiatives, featuring auctions and entertainment.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21617_71091b63ade92135de63cbc9b5c8b479.jpeg",
    highlights: ["400 guests", "Fundraising", "Live auction"],
    technologies: ["Fundraising", "Auction Management", "Entertainment"],
    status: "Completed",
    featured: false,
  },
  {
    id: 5,
    title: "Training Workshop",
    client: "Leadership Academy",
    category: "Education",
    date: "2023-11-20",
    location: "Hanoi",
    description:
      "An intensive leadership training workshop for corporate executives, featuring interactive sessions and case studies.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21618_039cc7689f21366cd0284c4dfae4da00.jpeg",
    highlights: ["50 participants", "Interactive sessions", "Case studies"],
    technologies: [
      "Training Design",
      "Interactive Learning",
      "Assessment Tools",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: 6,
    title: "Award Ceremony",
    client: "Industry Association",
    category: "Corporate",
    date: "2023-10-30",
    location: "Ho Chi Minh City",
    description:
      "Annual industry awards ceremony recognizing excellence in technology and innovation across Vietnam.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21621_450b9d6bbabceab04f216390c0bc6142.jpeg",
    highlights: ["600+ attendees", "Award presentations", "Networking"],
    technologies: ["Award Management", "Voting System", "Live Presentations"],
    status: "Completed",
    featured: true,
  },
  {
    id: 7,
    title: "Music Festival",
    client: "Cultural Arts Center",
    category: "Entertainment",
    date: "2023-09-15",
    location: "Da Nang",
    description:
      "A three-day music festival celebrating Vietnamese and international artists, featuring multiple stages and food vendors.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21627_74728b874e1c4cd1eb60c0a8455b6dcb.jpeg",
    highlights: [
      "10,000+ attendees",
      "Multiple stages",
      "International artists",
    ],
    technologies: [
      "Stage Management",
      "Sound Systems",
      "Security Coordination",
    ],
    status: "Completed",
    featured: false,
  },
  {
    id: 8,
    title: "Tech Startup Demo Day",
    client: "Innovation Hub",
    category: "Corporate",
    date: "2023-08-25",
    location: "Ho Chi Minh City",
    description:
      "A demo day event showcasing promising tech startups to investors and industry leaders.",
    image:
      "https://golives3.s3.amazonaws.com/2022/11/21621_450b9d6bbabceab04f216390c0bc6142.jpeg",
    highlights: ["15 startups", "50+ investors", "Pitch competitions"],
    technologies: ["Pitch Management", "Investor Relations", "Demo Setup"],
    status: "Completed",
    featured: false,
  },
];

export const categories = [
  "All",
  "Corporate",
  "Wedding",
  "Charity",
  "Education",
  "Entertainment",
];

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (category === "All") return projects;
  return projects.filter((project) => project.category === category);
};

export const searchProjects = (searchTerm) => {
  const term = searchTerm.toLowerCase();
  return projects.filter(
    (project) =>
      project.title.toLowerCase().includes(term) ||
      project.client.toLowerCase().includes(term) ||
      project.description.toLowerCase().includes(term) ||
      project.location.toLowerCase().includes(term)
  );
};

export const getProjectById = (id) => {
  return projects.find((project) => project.id === id);
};

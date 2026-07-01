import type { AboutData, ContactInfo, PortfolioData, ResumeData } from '../types'

export const contactInfo: ContactInfo = {
  name: 'Nguyễn Đức Thắng',
  title: 'React Native Developer',
  email: 'nguyenthang070103@gmail.com',
  phone: '0822414458',
  birthday: '07/01/2003',
  location: 'Hanoi, Vietnam',
}

export const aboutData: AboutData = {
  description: "I am a React Native Developer with experience building cross-platform mobile applications for iOS and Android.",
  additionalInfo: "Specialized in mobile app development using React Native, JavaScript, Redux, Firebase, and Socket.io. Experienced in outsourcing projects, product development, and CMS web applications.",
  services: [
    {
      icon: '📱',
      title: 'React Native Development',
      description: 'Build cross-platform mobile apps for iOS and Android using React Native.',
    },
    {
      icon: '🎨',
      title: 'Mobile UI/UX Design',
      description: 'Collaborate with designers to create mobile app interfaces.',
    },
    {
      icon: '⚛️',
      title: 'State Management',
      description: 'Efficient state management with Redux, Context API, and other tools.',
    },
    {
      icon: '💻',
      title: 'React.js Development',
      description: 'Build web applications and CMS using React.js',
    },
  ],
  testimonials: [

  ],
  clients: ['Gocheap', 'LetgoO', 'Reikatachi', 'Winnie', 'WSA × MBank — Nền tảng Thiện nguyện'],
}

export const resumeData: ResumeData = {
  education: [
    {
      school: 'FPT Polytechnic College',
      period: '08/2021 — 12/2023',
      description: 'Information Technology / Computer Programming, GPA: 3.5/4.0',
    },
  ],
  experience: [
    {
      position: 'React Native Developer',
      company: 'YeoWuBie Interaction',
      period: '2024 — Present',
      description: 'Participate in developing Winnie product project using React Native',
    },
    {
      position: 'Front-End Developer',
      company: 'Leatech JSC',
      period: '2023 — 2024',
      description: 'Participate in developing outsource projects and products using React Native and ReactJS',
    },
  ],
  skills: [
    { 
      name: 'React Native', 
      icon: 'https://reactnative.dev/img/header_logo.svg' 
    }, // Primary skills
    { 
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'React.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' 
    }, // Occasional
    { 
      name: 'HTML/CSS', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' 
    },
    { 
      name: 'Redux', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' 
    },
    { 
      name: 'Firebase', 
      icon: 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg' 
    },
    { 
      name: 'TypeScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' 
    },
    { 
      name: 'Tailwind CSS', 
      icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' 
    },
    // { 
    //   name: 'Git', 
    //   icon: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' 
    // },
  ],
}

export const portfolioData: PortfolioData = {
  projects: [
    {
      title: 'WSA × MBank — Nền tảng Thiện nguyện',
      category: 'NextJS',
      link: 'https://wsa-mbbank.com.vn/',
      links: [
        { label: 'Campaign Site', url: 'https://wsa-mbbank.com.vn/' },
      ],
      period: '05/2026 — 05/2026',
      description: 'Charity & donation platform built for MB Bank, connecting people in need, fundraisers, and donors through real-time, transparent fund tracking. 🏆 Winner of "Government & Citizen Engagement" at the World Summit Awards (WSA) 2025.',
      technologies: ['NextJS', 'Vercel', 'Google Analytics'],
    },
    {
      title: 'Winnie',
      category: 'React Native',
      link: 'https://play.google.com/store/apps/details?id=com.winnie.userapp.v1',
      links: [
        { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.winnie.userapp.v1' },
        { label: 'App Store', url: 'https://apps.apple.com/vn/app/winnie/id6737789682' },
      ],
      period: '10/2024 — Present',
      description: 'Discover stores in your neighborhood and earn consistent benefits from local vendors — a lifestyle app connecting shops with nearby customers.',
      technologies: ['React Native Expo', 'Firebase', 'Redux', 'Socket.io', 'Google Map API', 'ReactJS', 'NextJS'],
    },
    {
      title: 'Reikatachi — Đồ Nhật Nội Địa',
      category: 'React Native',
      link: 'https://play.google.com/store/apps/details?id=com.reikatachi.customer&hl=vi',
      links: [
        { label: 'Customer · Google Play', url: 'https://play.google.com/store/apps/details?id=com.reikatachi.customer&hl=vi' },
        { label: 'Customer · App Store', url: 'https://apps.apple.com/us/app/reikatachi-%C4%91%E1%BB%93-nh%E1%BA%ADt-n%E1%BB%99i-%C4%91%E1%BB%8Ba/id6553978990' },
        { label: 'Manager · App Store', url: 'https://apps.apple.com/us/app/reikatachi-manager/id6556867041' },
      ],
      period: '04/2024 — 05/2024',
      description: 'Japanese import shopping app offering 100% authentic domestic Japanese goods (fashion, cosmetics, lifestyle products) delivered across Vietnam. Built with a separate Manager app for store & order operations.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io', 'ReactJS', 'NextJS'],
    },
    {
      title: 'LetgoO',
      category: 'React Native',
      link: '#',
      period: '10/2023 — 04/2024',
      description: 'Develop an application that connects users who need to book a ride with drivers who can share trips, allowing drivers to post trips for other drivers to accept. Additionally, develop an Admin web platform to manage displayed content, promotions, support trip creation and editing for customers, and oversee all trips available on the app.',
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux', 'ReactJS'],
    },
    {
      title: 'GOCheap! — Thuê Tài Xế Lái Xe Hộ',
      category: 'React Native',
      link: 'https://play.google.com/store/apps/details?id=customer.gocheap.vn',
      links: [
        { label: 'Customer · Google Play', url: 'https://play.google.com/store/apps/details?id=customer.gocheap.vn' },
        { label: 'Customer · App Store', url: 'https://apps.apple.com/us/app/gocheap-thu%C3%AA-t%C3%A0i-x%E1%BA%BF-l%C3%A1i-xe-h%E1%BB%99/id6455336074' },
        { label: 'Driver · Google Play', url: 'https://play.google.com/store/apps/details?id=driverx.gocheap.vn' },
        { label: 'Driver · App Store', url: 'https://apps.apple.com/us/app/gocheap-t%C3%A0i-x%E1%BA%BF-vip/id6449995080' },
      ],
      period: '06/2023 — 08/2023',
      description: 'On-demand driver & ride-hailing platform in Vietnam — book a substitute driver, private driver, or transport service 24/7 with transparent pricing and 5,000+ verified driver partners nationwide. Includes separate Customer and Driver (DriverX) apps.',
      technologies: ['React Native', 'OneSignal', 'Google Map API', 'Socket.io', 'Redux', 'ReactJS'],
    },
  ],
}


import type { ContactInfo, AboutData, ResumeData, PortfolioData, BlogData } from '../types'

export const contactInfo: ContactInfo = {
  name: 'Nguyễn Đức Thắng',
  title: 'React Native Developer', // Thay đổi chức danh từ CV của bạn
  email: 'your.email@example.com', // Thay đổi email từ CV của bạn
  phone: '+84 xxx xxx xxxx', // Thay đổi số điện thoại từ CV của bạn
  birthday: 'DD/MM/YYYY', // Thay đổi ngày sinh từ CV của bạn
  location: 'Vietnam', // Thay đổi địa chỉ từ CV của bạn
}

export const aboutData: AboutData = {
  description: "Tôi là một React Native Developer với kinh nghiệm phát triển các ứng dụng di động cross-platform cho iOS và Android.",
  additionalInfo: "Chuyên phát triển các ứng dụng mobile sử dụng React Native, JavaScript, Redux, Firebase, Socket.io. Có kinh nghiệm phát triển ứng dụng outsource, sản phẩm và các ứng dụng web CMS.",
  services: [
    {
      icon: '📱',
      title: 'React Native Development',
      description: 'Phát triển ứng dụng di động cross-platform cho iOS và Android sử dụng React Native.',
    },
    {
      icon: '🎨',
      title: 'Mobile UI/UX Design',
      description: 'Kết hợp với designer để thiết kế giao diện cho ứng dụng mobile.',
    },
    {
      icon: '⚛️',
      title: 'State Management',
      description: 'Quản lý state hiệu quả với Redux, Context API và các công cụ quản lý state khác.',
    },
    {
      icon: '💻',
      title: 'React.js Development',
      description: 'Phát triển ứng dụng web, CMS sử dụng React.js',
    },
  ],
  testimonials: [

  ],
  clients: ['Gocheap', 'LetgoO', 'Reikatachi', 'Winnie'],
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
    }, // Kỹ năng chính
    { 
      name: 'JavaScript', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' 
    },
    { 
      name: 'React.js', 
      icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' 
    }, // Thỉnh thoảng
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
      title: 'Winnie',
      category: 'React Native',
      link: '#',
      period: '10/2024 — Present',
      description: 'Develop Winnie application to support customers to connect and search for stores around their location in map, buy store membership cards and every time they return to the store, they do not need to wait for service, customers can use the card before coming to the store or book in advance.',
      technologies: ['React Native Expo', 'Firebase', 'Redux', 'Socket.io', 'Google Map API'],
    },
    {
      title: 'Reikatachi',
      category: 'React Native',
      link: '#',
      period: '04/2024 — 05/2024',
      description: 'Develop an application for customers to shop and search for Reikatachi products, in addition to developing an administration Web and an administration application for Admins to manage customer orders, products in stock, and promotions displayed on the customer app.',
      technologies: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
    },
    {
      title: 'LetgoO',
      category: 'React Native',
      link: '#',
      period: '10/2023 — 04/2024',
      description: 'Develop an application that connects users who need to book a ride with drivers who can share trips, allowing drivers to post trips for other drivers to accept. Additionally, develop an Admin web platform to manage displayed content, promotions, support trip creation and editing for customers, and oversee all trips available on the app.',
      technologies: ['React Native', 'Firebase', 'Socket.io', 'Redux'],
    },
    {
      title: 'Gocheap',
      category: 'React Native',
      link: '#',
      period: '06/2023 — 08/2023',
      description: 'Develop 2 driver and customer applications, support connecting to find a driver when the customer is drunk and cannot drive and connect a driver who can go to the place the customer booked on the app',
      technologies: ['React Native', 'OneSignal', 'Google Map API', 'Socket.io', 'Redux'],
    },
  ],
}

export const blogData: BlogData = {
  posts: [
    {
      title: 'Design conferences in 2022',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
      link: '#',
    },
    {
      title: 'Best fonts every designer',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.',
      link: '#',
    },
    {
      title: 'Design digest #80',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.',
      link: '#',
    },
    {
      title: 'UI interactions of the week',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.',
      link: '#',
    },
    {
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: '#',
    },
    {
      title: 'Design digest #79',
      category: 'Design',
      date: 'Fab 23, 2022',
      excerpt: 'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.',
      link: '#',
    },
  ],
}


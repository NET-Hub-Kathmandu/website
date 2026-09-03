export const eventsData = {
  tag: 'What we run',
  title: 'Workshops, talks & conferences',
  description: 'Regular hands-on technical gatherings, architecture deep-dives, and watch parties designed for Nepal’s software engineering ecosystem.',
  seeAllUrl: 'https://www.meetup.com/dot-net-hub-kathmandu',
  events: [
    {
      id: 1,
      tag: 'Workshop',
      category: 'workshops',
      title: 'Umbraco CMS with ASP.NET Core',
      description:
        'A hands‑on build session covering setup, content modelling, custom document types, and deployment of modern Umbraco 13 on .NET 8.',
      date: 'Saturday, March 22',
      time: '11:00 AM – 2:30 PM NPT',
      venue: 'Maitri Office, Thapathali, Kathmandu',
      speaker: 'Pasang Tamang & Guest Engineers',
      status: 'upcoming',
      topics: ['ASP.NET Core', 'Umbraco 13', 'Headless API', 'Azure WebApp'],
      meetupUrl: 'https://www.meetup.com/dot-net-hub-kathmandu/events/',
      delay: '0s'
    },
    {
      id: 2,
      tag: 'Conference',
      category: 'conferences',
      title: 'Microsoft Build — Localhost Kathmandu',
      description:
        'Our flagship annual community watch party and local engineering deep‑dives on the year’s biggest Microsoft Build keynote announcements and .NET 9 features.',
      date: 'May 2024 (Annual)',
      time: '1:00 PM – 6:00 PM NPT',
      venue: 'In-person Auditorium, Kathmandu',
      speaker: 'Microsoft MVPs & Regional Community Leads',
      status: 'completed',
      topics: ['.NET 9', 'C# 13', 'Semantic Kernel', 'Azure OpenAI'],
      meetupUrl: 'https://www.meetup.com/dot-net-hub-kathmandu/events/',
      delay: '0.1s'
    },
    {
      id: 3,
      tag: 'Dev Day',
      category: 'devdays',
      title: 'GitHub Copilot Dev Days: Kathmandu Edition',
      description:
        'Practical, live-coding sessions pairing GitHub Copilot with modern .NET, refactoring enterprise C# legacy solutions, and automated unit testing with xUnit.',
      date: 'August 2024',
      time: '2:00 PM – 5:30 PM NPT',
      venue: 'SELISE Group Hub, Kathmandu',
      speaker: 'Nabaraj Ghimire & Senior Architects',
      status: 'completed',
      topics: ['GitHub Copilot', 'Prompt Engineering', 'xUnit & Moq', 'Clean Architecture'],
      meetupUrl: 'https://www.meetup.com/dot-net-hub-kathmandu/events/',
      delay: '0.2s'
    },
    {
      id: 4,
      tag: 'Architecture Talk',
      category: 'workshops',
      title: 'High-Performance Microservices with gRPC & .NET',
      description:
        'Benchmarking REST vs gRPC in .NET 8, implementing distributed tracing with OpenTelemetry, and running containerized services on Azure Kubernetes Service (AKS).',
      date: 'Coming Soon — Q3 2026',
      time: '11:30 AM – 2:00 PM NPT',
      venue: 'Kathmandu / Hybrid Live Stream',
      speaker: 'Core Community Leaders',
      status: 'upcoming',
      topics: ['gRPC', 'OpenTelemetry', 'Docker', 'Azure AKS'],
      meetupUrl: 'https://www.meetup.com/dot-net-hub-kathmandu/events/',
      delay: '0.3s'
    }
  ],
  livePanel: {
    title: 'See upcoming dates & RSVP live on Meetup',
    subtitle:
      'Meetup is our official registration platform — RSVP to receive venue directions and calendar invites.',
    url: 'https://www.meetup.com/dot-net-hub-kathmandu/events/'
  },
  photoBreak: {
    imageSrc: '/assets/images/event-build-stage.jpg',
    tag: 'Microsoft Build — Localhost Kathmandu',
    title: 'Real talks, real production takeaways.'
  }
};

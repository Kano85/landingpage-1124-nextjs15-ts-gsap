//src/components/sections/works/projectData.ts

interface ProjectData {
  id: string;
  title: string;
  companyName: string;
  date: string;
  imageUrl: string;
  slug: string;
  color: string;
}

export const projectData: ProjectData[] = [
  {
    id: '01',
    companyName: 'WBS Gruppe AG',
    date: '2023-2024',
    imageUrl: '/project1-hero.png',
    title: 'Trainspot',
    color: '#0C0C0C',
    slug: 'trainspot',
  },
  {
    id: '02',
    title: 'Kurskonfigurator',
    companyName: 'WBS Gruppe AG',
    date: '2022-2023',
    imageUrl:
      'https://images.unsplash.com/photo-1676793894040-b6dd72276620?q=80&w=2089&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#8C8C8C',
    slug: 'kurskonfigurator',
  },
  {
    id: '03',
    title: 'Design System',
    companyName: 'WBS Gruppe AG',
    date: '2020-2023',
    imageUrl:
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    color: '#EFE8D3',
    slug: 'designsystem',
  },
  {
    id: '04',
    title: 'Kursplannung',
    imageUrl: '/project-1.png',
    color: '#706D63',
    companyName: 'WBS Gruppe AG',
    date: '2021-2022',
    slug: 'kursplannung',
  },
];

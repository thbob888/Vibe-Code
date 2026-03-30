/**
 * 项目数据
 */

export interface Project {
  id: number
  title: string
  description: string
  image: string
  techStack: string[]
  link: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: '个人作品集网站',
    description: '使用 React + TypeScript + Tailwind CSS 开发的个人作品集展示网站',
    image: 'https://via.placeholder.com/600x400/1a1a2e/6366f1?text=Portfolio',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 2,
    title: '电商后台管理系统',
    description: '功能完善的电商后台管理系统，支持商品管理、订单处理、数据统计',
    image: 'https://via.placeholder.com/600x400/1a1a2e/ec4899?text=E-commerce',
    techStack: ['Vue3', 'Element Plus', 'Pinia'],
    link: '#'
  },
  {
    id: 3,
    title: '实时聊天应用',
    description: '支持实时消息推送、群聊、文件传输的即时通讯应用',
    image: 'https://via.placeholder.com/600x400/1a1a2e/14b8a6?text=Chat+App',
    techStack: ['React', 'Socket.io', 'Node.js'],
    link: '#'
  },
  {
    id: 4,
    title: '任务管理工具',
    description: '简洁高效的任务管理工具，支持看板视图和团队协作',
    image: 'https://via.placeholder.com/600x400/1a1a2e/f59e0b?text=Task+Manager',
    techStack: ['React', 'Dnd Kit', 'Firebase'],
    link: '#'
  }
]

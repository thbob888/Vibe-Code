import React from 'react'
import { projects, Project } from '../data/projects'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * 项目卡片组件
 */
const ProjectCard: React.FC<{ project: Project; index: number; isVisible: boolean }> = ({ project, index, isVisible }) => {
  return (
    <a
      href={project.link}
      className={`group block bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* 项目截图 */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* 项目信息 */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 text-sm">
          {project.description}
        </p>

        {/* 技术栈标签 */}
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs rounded-full bg-gray-800 text-gray-300 group-hover:bg-purple-500/20 group-hover:text-purple-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </a>
  )
}

/**
 * Projects 组件 - 项目展示区域
 */
const Projects: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            我的项目
          </span>
        </h2>
        <p className={`text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          探索我的一些代表性作品
        </p>

        {/* 项目列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

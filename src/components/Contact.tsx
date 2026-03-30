import React from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

/**
 * Contact 组件 - 联系方式区域
 * 包含邮箱、GitHub 和社交媒体链接
 */
const Contact: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation()

  const contacts = [
    {
      name: 'GitHub',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      link: 'https://github.com',
      description: '查看我的开源项目'
    },
    {
      name: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: 'mailto:example@email.com',
      description: '发送邮件联系我'
    },
    {
      name: '掘金',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.923 17.653c-1.357 1.129-3.268 1.984-5.303 2.21V23h2.5v-2.557c1.876-.21 3.18-.938 4.293-1.994.912-.868 1.477-1.89 1.977-3.023l-2.467.065c-.45 1.137-.99 1.8-2.1 1.8-.87 0-1.573-.5-1.573-1.51 0-.95.64-1.37 1.683-1.37 1.17 0 2.174.4 3.13 1.29l.457-2.33c-.94-.84-2.17-1.41-3.66-1.41-2.24 0-4.16 1.44-4.16 3.86 0 2.19 1.34 3.24 3.5 3.75v2.62h2.5v-2.38c1.19-.37 2.17-1.05 2.95-2.16l2.1.06c-.68 1.52-1.63 2.54-3.33 3.15z"/>
        </svg>
      ),
      link: 'https://juejin.cn',
      description: '阅读我的技术文章'
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      link: 'https://linkedin.com',
      description: '职业社交网络'
    }
  ]

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <h2
          ref={ref}
          className={`text-4xl md:text-5xl font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            联系我
          </span>
        </h2>
        <p className={`text-gray-400 text-center mb-12 max-w-2xl mx-auto transition-all duration-700 delay-100 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          有任何问题或合作意向，欢迎通过以下方式联系我
        </p>

        {/* 联系方式列表 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all hover:scale-105 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="p-3 bg-gray-800 rounded-xl text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                {contact.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">{contact.name}</h3>
                <p className="text-gray-400 text-sm">{contact.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact

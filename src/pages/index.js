import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const docLink = {
  text: "课程资源下载",
  target: "_blank",
  url: "https://github.com/walkman617/wechat",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "使用 Kotlin 进行 Android 开发",
    target: "_blank",
    url: "https://k.nkugame.com/",
    description:
      "使用 Kotlin 更快地编写更出色的 Android 应用。 Kotlin 是一种新型的静态类型编程语言，有超过 60% 的专业 Android 开发者在使用，它有助于提高工作效率、开发者满意度和代码安全性。",
    QA:"",
    color: "#E95800",
  },
  {
    text: "微信公众平台",
    target: "_blank",
    url: "https://mp.weixin.qq.com/",
    description:
      "小程序提供了一个简单、高效的应用开发框架和丰富的组件及API，帮助开发者在微信中开发具有原生 APP 体验的服务。",
      QA:"",
      color: "#1099A8",
  },
  {
    text: "云开发CloudBase",
    target: "_blank",
    url: "https://cloudbase.net/",
    description:
      "提供了云原生一体化应用开发平台，可以快速构建小程序、Web、移动应用的后端服务。",
      QA:"",
      color: "#BC027F",
  },
  {
    text: "微信云托管",
    target: "_blank",
    url: "https://cloud.weixin.qq.com/cloudrun",
    description:
      "以容器服务为核心，提供方便易用的存储体系、微信生态、安全鉴权等服务能力；搭配简单易懂的操作面板，集成资源监控，资源告警，流水线等自动化功能，是一站式的后端云服务。",
      QA:"",
      color: "#0D96F2",
  },
  {
    text: "选课名单与个人项目地址",
    target: "_blank",
    url: "https://docs.qq.com/sheet/DYldualFLZXVKYWtZ",
    description:
      "1）填写个人邮箱：受邀加入tapd.cn上的项目“智能移动开发_2022春”，用于上机实践中的答疑；2）填写个人Git项目的访问地址：如GitHub、GitLab、码云，用于提交每次的上机实践的成果和学期项目报告。",
      QA:"",
      color: "#8EB814",
  },
  {
    text: "微信小程序应用开发赛",
    target: "_blank",
    url: "https://developers.weixin.qq.com/community/competition",
    badge: true,
    description:
      "微信小程序应用开发赛是基于腾讯微信小程序平台的创新应用开发设计竞赛，大赛面向全球高校在校生开放。",
    QA:"",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>《智能移动开发》课程资源平台</title>
      <h1 style={headingStyles}>
      智能移动开发
        <br />
        <span style={headingAccentStyles}> — 课程平台 </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      <p style={paragraphStyles}>
      2022中国高校计算机大赛：
         <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/community/competition"}
          >
            微信小程序应用开发赛
          </a>
       
      </p>
      <ul style={listStyles}>
        <li style={docLinkStyle}>
          <a
            target={docLink.target}
            style={linkStyle}
            href={docLink.url}
          >
            {docLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                target={link.target}
                style={linkStyle}
                href={link.url}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
              <p style={descriptionStyle}>{link.QA}</p>
            </span>
          </li>
        ))}
      </ul>
      <span>Copyright © 2022 南开大学, 软件学院. Built with <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>. </span>
      
    </main>
  )
}

export default IndexPage

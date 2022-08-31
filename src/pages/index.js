import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 60,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 480,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#5C3317",
  fontWeight: "bold",
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
  maxWidth: 760,
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
    text: "微信小程序与云开发(PPT)",
    target: "_blank",
    url: "https://github.com/walkman617/wechat",
    description:
      "想要更具体了解关于框架、组件、API的详细内容，请参考对应的参考文档。",
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
      <title>《网络安全管理》课程资源平台</title>
      <h1 style={headingStyles}>
      《网络安全管理》
        <br />
        <span style={headingAccentStyles}> 信息安全管理方向 </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      
      

      <p style={paragraphStyles}>

      <code style={codeStyles}>课程学习与实践（40%）</code><br />
      <br />1. 课程内容：<a
            style={linkStyle}
            target="_blank"
            href={"https://nsm.nkugame.com/"}
          >
            课件下载
          </a>
      <br />2. 课程作业：TBD
      <br />3. 课程实践：TBD
      <br /><br /><br />

      <code style={codeStyles}>学期项目报告（60%）</code><br />
      <br />
      TBD
      <br /> 
      
      </p>
      <ul style={listStyles}>
        
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
      <span>Copyright © 2022 南开大学, 商学院.  </span>
      
    </main>
  )
}

export default IndexPage

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
    text: "1.1 Opening Vignette",
    target: "_blank",
    url: "https://github.com/walkman617/DS2021/blob/main/Vignette/ov1.1.md",
    description:
      "How Intelligent Systems Work for KONE Elevators and Escalators Company.",
    QA:"<a href=\"http://nankai-cs.mikecrm.com/qi6ABxT\" target=_blank><img src=/images/ov1.1.png></a>",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    target: "_blank",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
      QA:"",
      color: "#1099A8",
  },
  {
    text: "Reference Guides",
    target: "_blank",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
      QA:"",
      color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    target: "_blank",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
      QA:"",
      color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    target: "_blank",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
      QA:"",
      color: "#8EB814",
  },
  {
    text: "Build and Host",
    target: "_blank",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
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
        微信小程序开发
        <br />
        <span style={headingAccentStyles}> — 课件资源 </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      <p style={paragraphStyles}>
      2022中国高校计算机大赛：<code style={codeStyles}>微信小程序应用开发赛</code> <br></br>
         
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

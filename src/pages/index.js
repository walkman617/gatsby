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

const docLink = {
  text: "使用 Kotlin 进行 Android 开发",
  target: "_blank",
  url: "https://k.nkugame.com/",
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
    text: "微信云托管",
    target: "_blank",
    url: "https://cloud.weixin.qq.com/cloudrun",
    description:
      "以容器服务为核心，提供方便易用的存储体系、微信生态、安全鉴权等服务能力；搭配简单易懂的操作面板，集成资源监控，资源告警，流水线等自动化功能，是一站式的后端云服务。",
      QA:"",
      color: "#0D96F2",
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
        <span style={headingAccentStyles}> — 课程资源平台 </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      
      

      <p style={paragraphStyles}>

      <code style={codeStyles}>选课名单（
      <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/sheet/DYldualFLZXVKYWtZ"}
          >
            腾讯文档
          </a>）</code><br />
      <br />1. 填写个人邮箱：受邀加入tapd.cn上的项目“智能移动开发_2022春”，用于上机实践中的答疑；
      <br />2. 填写个人Git项目的访问地址：如github.com、gitLab.com、gitee.com等，用于提交作业和报告。
      <br /><br /><br />

      <code style={codeStyles}>课程学习与实践（60%）</code><br />
      <br />1. 课程内容：<a
            style={linkStyle}
            target="_blank"
            href={"https://k.nkugame.com/"}
          >
            使用 Kotlin 进行 Android 开发
          </a>
      <br />2. 将每次上机的成果和徽章截图提交到个人的Git项目中
      <br />3. 每次上机任务的提交截止时间在下次上机任务之前（<b>晚提交作业会有较重的扣分</b>）
      <br /><br /><br />
      <code style={codeStyles}>学期项目报告（40%）</code><br />
      <br />
      1. 参加 
          <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/community/competition"}
          >
            2022中国高校计算机大赛：微信小程序应用开发赛
          </a>
          <br />
          <li>报名: 2022年6月9日21:00前 </li>
          <li>提交作品: 2022年6月16日21:00前 </li>
      <br />2. 组队要求（<b>本课程要求只能选择1人或2人组队</b>）
      <br /> 
      <li>1人独立组队：完成前端 
      <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/miniprogram/dev/framework/"}
          >
            微信小程序
          </a> + 后端 
          <a
          style={linkStyle}
          target="_blank"
          href={"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html"}
        >
          微信云开发
          </a>;
          </li>
      
      <li>2人组队：完成前端 
      <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/miniprogram/dev/framework/"}
          >
            微信小程序
            </a> + 后端 
            <a
          style={linkStyle}
          target="_blank"
          href={"https://developers.weixin.qq.com/miniprogram/dev/wxcloudrun/src/basic/intro.html"}
        >
          微信云托管
          </a>。
          </li>
          <br />3. 项目迭代
      <br /> 
      <li>完成4次迭代，每次迭代都需按照
          <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/community/competition/intro"}
          >
            竞赛规程
          </a> 的要求，提交如下内容到个人的Git项目中：（1）介绍文档、（2）演示视频、（3）小程序appid（允许上线版本和体验版）。
          </li>
          <li>每次迭代至少完成2个功能，功能的粒度请参考 “
          <a
            style={linkStyle}
            target="_blank"
            href={"https://developers.weixin.qq.com/community/develop/doc/000c44535581c853f6addb4c951809"}
          >
            作品主题
          </a>” 中列举的功能粒度。
          </li>
          <br />4. 迭代日期（<b>提交作品到个人Git项目，晚提交会有较重的扣分</b>）
          <br />
          <li>迭代1: 2022年5月24日 21:00前 </li>
          <li>迭代2: 2022年5月31日 21:00前</li>
          <li>迭代3: 2022年6月7日 21:00前</li>
          <li>迭代4（同时提交作品到竞赛平台）: 2022年6月16日 21:00前</li>
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
      <span>Copyright © 2022 南开大学, 软件学院. Built with <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>. </span>
      
    </main>
  )
}

export default IndexPage

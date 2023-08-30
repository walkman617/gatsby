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
  maxWidth: 880,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 48,
  fontSize: 24,
}
const codeStyles = {
  color: "#5C3317",
  fontWeight: "bold",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "2rem",
  borderRadius: 6,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 32,
  maxWidth: 960,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 24,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 22,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 20,
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
    text: "Kotlin",
    target: "_blank",
    url: "https://kotlinlang.org/",
    description:
      "Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin is designed to interoperate fully with Java, and the JVM version of Kotlin's standard library depends on the Java Class Library, but type inference allows its syntax to be more concise.",
      QA:"",
      color: "#1099A8",
  },
  {
    text: "Develop Android apps with Kotlin",
    target: "_blank",
    url: "https://developer.android.com/kotlin",
    description:
      "Write better Android apps faster with Kotlin. Kotlin is a modern statically typed programming language used by over 60% of professional Android developers that helps boost productivity, developer satisfaction, and code safety.",
      QA:"",
      color: "#BC027F",
  },
  {
    text: "Android Studio",
    target: "_blank",
    url: "https://developer.android.com/studio",
    description:
      "Android Studio provides the fastest tools for building apps on every type of Android device.",
      QA:"",
      color: "#0D96F2",
  },
  {
    text: "Machine learning for mobile developers",
    target: "_blank",
    url: "https://developers.google.com/ml-kit",
    badge: true,
    description:
      "ML Kit brings Google’s machine learning expertise to mobile developers in a powerful and easy-to-use package.",
    QA:"",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Intelligent Mobile Development</title>
      <h1 style={headingStyles}>
      Intelligent Mobile Development
        <br />
        <span style={headingAccentStyles}> — Develop Android apps with Kotlin </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      
      

      <p style={paragraphStyles}>

      
      <code style={codeStyles}>Resources</code><br />
      <br />Slides：<a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/s/wCU0geKheAqdwjSB15I2Zq"}
          >
            Link
          </a>
      <br />Final Report: to be determined
      <br /><br /><br />

      
      <code style={codeStyles}>Assignments</code><br />
      <br />
      Lesson 1: Kotlin basics
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-1"}
          >
            learn online
          </a></li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYlpDbUh1UVZSdEFl"}
          >
            submit online
          </a></li>
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
      <span>Copyright © 2023 College of Software, Nankai University. Built with <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>. </span>
      
    </main>
  )
}

export default IndexPage

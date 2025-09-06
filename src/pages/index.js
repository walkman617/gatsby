import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 40,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 48,
  maxWidth: 880,
}
const headingAccentStyles = {
  color: "#663399",
}
const paragraphStyles = {
  marginBottom: 28,
  fontSize: 22,
}
const codeStyles = {
  color: "#5C3317",
  fontWeight: "bold",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.6rem",
  borderRadius: 5,
}
const listStyles = {
  marginBottom: 60,
  paddingLeft: 20,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 28,
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
  marginBottom: 10,
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
    text: "Jetpack Compose",
    target: "_blank",
    url: "https://developer.android.com/develop/ui/compose",
    badge: true,
    description:
      "Jetpack Compose is Android’s recommended modern toolkit for building native UI. It simplifies and accelerates UI development on Android. Quickly bring your app to life with less code, powerful tools, and intuitive Kotlin APIs.",
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
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Intelligent Mobile Development</title>
      <h1 style={headingStyles}>
      Intelligent Mobile Development
        <br />
        <span style={headingAccentStyles}> 2025 Autumn </span>
        <span role="img" aria-label="Party popper emojis">
        🚀 
        </span>
      </h1>
      
      

      <p style={paragraphStyles}>

      
      <code style={codeStyles}>Resources</code><br />
      <br />Slides: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/s/oPg8u_sHiql6dpLcofID6G"}
          >
            Link
          </a>
      <br />

      <br />Kotlin Playground: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/training/kotlinplayground"}
          >
            Link
          </a>
      <br />

      <br />Android Basics with Compose: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/android-basics-compose/course"}
          >
            Link
          </a>
      <br />
      

      <br />
      <br />
      
      <code style={codeStyles}>Assignments</code><br />


      <br />
      Assignment 1 (TBD) 
          <br />
          <li>[Unit 1 - Pathway 1] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-1-pathway-1"}
            >
              Introduction to programming in Kotlin  
            </a> 
          </li>

          <li> [Submit]  
            <a
            style={linkStyle}
            target="_blank"
            href={"#"}
            >
               Screenshots of Codelabs
            </a>
          </li>         
      <br />


      <br />
      Assignment 2 (TBD) 
          <br />
          <li>[Unit 1 - Pathway 2] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-1-pathway-2"}
            >
              Setup Android Studio  
            </a> 
          </li>

      <br />


      <br />
      Assignment 3 (TBD) 
          <br />
          <li>[Unit 1 - Pathway 3] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-1-pathway-3"}
            >
              Build a basic layout  
            </a> 
          </li>
  
      <br />

      <br />
      Assignment 4 (TBD) 
          <br />
          <li>[Unit 2 - Pathway 1] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-2-pathway-1"}
            >
              Kotlin fundamentals  
            </a> 
          </li>

      <br />


      <br />
      Assignment 5 (TBD) 
          <br />
          <li>[Unit 2 - Pathway 2] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-2-pathway-2"}
            >
              Add a button to an app  
            </a> 
          </li>
     
      <br />

      
      <br />
      Assignment 6 (TBD) 
          <br />
          <li>[Unit 2 - Pathway 3] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-2-pathway-3"}
            >
              Interacting with UI and state  
            </a> 
          </li>

              
      <br />

      
      <br />
      Assignment 7 (TBD) 
          <br />
          <li>[Unit 3 - Pathway 1] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-3-pathway-1"}
            >
              More Kotlin fundamentals  
            </a> 
          </li>

              
      <br />

      <br />
      Assignment 8 (TBD) 
          <br />
          <li>[Unit 3 - Pathway 2] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-3-pathway-2"}
            >
              Build a scrollable list  
            </a> 
          </li>

           
      <br />


      <br />
      Assignment 9 (TBD) 
          <br />
          <li>[Unit 3 - Pathway 3] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-3-pathway-3"}
            >
              Build beautiful apps  
            </a> 
          </li>
             
      <br />

      
      <br />
      Assignment 10 (TBD) 
          <br />
          <li>[Unit 4 - Pathway 1] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-4-pathway-1"}
            >
              Architecture Components  
            </a> 
          </li>

         
      <br />

      <br />
      Assignment 11 (TBD) 
          <br />
          <li>[Unit 4 - Pathway 2] 
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-4-pathway-2"}
            >
              Navigation in Jetpack Compose  
            </a> 
          </li>

          
      <br />

      <br />
      Assignment 12 (TBD) 
          <br />
          <li>[Unit 4 - Pathway 3]
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-4-pathway-3"}
            >
              Adapt for different screen sizes  
            </a> 
          </li>

           
      <br />

      


      </p>



      <br />
      <br />
      
      <code style={codeStyles}>References</code><br />

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

      
      <span>Copyright © 2024 College of Software, Nankai University. Built with <a target="_blank" href="https://www.gatsbyjs.com/">Gatsby</a>. </span>
      
    </main>
  )
}

export default IndexPage

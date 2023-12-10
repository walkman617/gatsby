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
      <br />Slides: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/s/wCU0geKheAqdwjSB15I2Zq"}
          >
            Link
          </a>
      <br />

      <br />Final Report: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/doc/DYm5pZ3pJRndCaGth"}
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

      <br />Compose Samples: <a
            style={linkStyle}
            target="_blank"
            href={"https://github.com/android/compose-samples"}
          >
            Link
          </a>
      <br />

      

      <br />

      
      <code style={codeStyles}>Assignments</code><br />


      <br />
      Lesson 1: Kotlin basics
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-1"}
            >
              Original  
            </a> 
              or   
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-development-with-kotlin-1"}
            >
              Mirrored  
            </a>
          
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYnpRYk9kaU9zbnBz"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 2: Kotlin Functions
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-2"}
            >
              Original  
            </a> 
              or   
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-development-with-kotlin-2"}
            >
              Mirrored  
            </a>
          
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYll5R3FUT2ZqclRN"}
          >
            submit online
          </a></li>
      <br />

      <br />
      Lesson 3: Classes and objects
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-3"}
            >
              Original  
            </a> 
              or   
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-development-with-kotlin-3"}
            >
              Mirrored  
            </a>
          
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYnJYQktRU2JxTFRq"}
          >
            submit online
          </a></li>
      <br />

      <br />
      Lesson 4: Build your first Android app
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-4"}
            >
              Original  
            </a> 
              or   
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-development-with-kotlin-4"}
            >
              Mirrored  
            </a>
          
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYkJBWHRJU3JoWVJ3"}
          >
            submit online
          </a></li>
      <br />

      <br />
      Lesson 5: Layouts
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.com/courses/pathways/android-development-with-kotlin-5"}
            >
              Original  
            </a> 
              or   
            <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-development-with-kotlin-5"}
            >
              Mirrored  
            </a>
          
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYld0SVdyUkh2U0hF"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 6: App Navigation
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-4-pathway-2"}
            >
              Navigation in Jetpack Compose  
            </a>
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYldDTHd2ZXR5Q3hS"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 7: Activity and Fragment Lifecycles
          <br />
          <li>Codelab: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-activity-lifecycle"}
            >
              Stages of the Activity lifecycle  
            </a>
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYmxvVmJnSlZ6QUxn"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 8: App architecture (UI Layer)
          <br />
          <li>Codelab: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-viewmodel-and-state"}
            >
              ViewModel and State in Compose  
            </a>
          </li>
          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYlJ1dFZJVkducnRT"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 9: App architecture (Persistence)
          <br />
          <li>Codelab 1: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-persisting-data-room"}
          >
            Persist data with Room
          </a></li>

          <li>Codelab 2: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/codelabs/basic-android-kotlin-compose-update-data-room"}
          >
            Read and update data with Room
          </a></li>

          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYkVMQXhVam1CcVZZ"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 10: Build apps with composables
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-6-pathway-1"}
          >
            Introduction to SQL
          </a></li>

          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYk56WnJodVRuaGRh"}
          >
            submit online
          </a></li>
      <br />


      <br />
      Lesson 11: Get data from the internet
          <br />
          <li>Pathway: <a
            style={linkStyle}
            target="_blank"
            href={"https://developer.android.google.cn/courses/pathways/android-basics-compose-unit-5-pathway-1"}
            >
            Get data from the internet
            </a>
            <p style={descriptionStyle}>
            Note: In the Step 5 codelab ("Get data from the internet") , 
            if you cannot connect to the BASE_URL ("https://android-kotlin-fun-mars-server.appspot.com"), 
            please replace the url with "https://open.nkugame.com".  
            </p>
          </li>

          <li>Homework: <a
            style={linkStyle}
            target="_blank"
            href={"https://docs.qq.com/form/page/DYlpiUXVNcEhvQXZa"}
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

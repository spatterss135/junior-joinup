import Layout from "../components/Layout"

export default function Profile() {
    return(
    <div>
      <Layout>
        <main>
          <h1>user's profile</h1>
          <div className="info-container">
            <div className="tagline">amateur coder, professional bowler</div>
            <p className="bio">
              I recently graduated a bootcamp and am hoping to build projects that I can add to my portfolio for potential employers to see! I am great at coming up with project ideas but I get a bit overwhelmed when it comes to actually building them, so I would love to learn alongside others who have more confidence in that area. In my free time I love bowling, reading, and watching old movies.
            </p>
            <div className="focuses">
              <ul>
                <li>
                  node.js
                </li>
                <li>
                  graphQL
                </li>
                <li>
                  tailwind
                </li>
              </ul>
            </div>
            <div className="project-interests">
              <ul>
                <li>
                  healthcare
                </li>
                <li>
                  wellness
                </li>
                <li>
                  nutrition
                </li>
              </ul>
            </div>
          </div>
        </main>
      </Layout>
    </div>
    )
}
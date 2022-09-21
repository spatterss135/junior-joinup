import Layout from "../components/Layout";

export default function About() {
  return (
    <div>
      <Layout>
      <main>
        <h2>about</h2>
        <p className="description">jr.joinUp is a social and educational platform created by college friends, bootcamp grads, and junior devs Colleen Murray and Sam Patterson to solve the paradox of needing experience to get a job but needing a job to get experience. 
        both of us have seen a consistent issue with many individuals trying to break into the coding world (ourselves included): many individuals are encouraged to enhance their resumes through coding on a team and building projects, but either have difficulty coming up with an idea or feel overwhelmed by the thought of turning their idea into an actual web application. 
        jr.joinUp's vision is to provide a platform for amateur coders to find potential projects and collaborators based around personal interests as opposed to experience level and skillset. 
        our vision is for amateur coders to be able to apply for jobs or actualize their dream applications with confidence through taking on roles usually given to more senior developers, such as creating/approving user stories and mentoring each other.
        </p>
        <div className="guidelines">
          <h2>community guidelines</h2>
          <ul>
            <li>
              <h3>not a platform to find grunt workers</h3>
              <p>as mentioned above, jr.joinUp is intended for amateur coders, which for purposes of this website we are considering people with less than 2 years of consistent coding experience. if you already feel comfortable in your skillset and simply want to seek out individuals to help actualize your vision for time/energy-management purposes, we encourage you to start an <span>open-source project</span></p>
            </li>
            <li>
              <h3>communication</h3>
            </li>
            <li>
              <h3>respect</h3>
            </li>
            <li>
              <h3></h3>
            </li>
          </ul>
        </div>
      </main>
      </Layout>
    </div>
  );
}

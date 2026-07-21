import { motion } from "framer-motion";

export default function Details() {
  return (
    <motion.section
      className="section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="title">Experience & Education</h1>
      <p className="subtitle">My professional journey so far — internships, hands-on work, and academic foundation.</p>

      <div className="timeline">
        <div className="timeline-node">
          <div className="timeline-marker" />
          <article className="timeline-content">
            <span className="timeline-date">Mar 2026 – Jul 2026</span>
            <h3>Kloudping IT Solution pvt Ltd</h3>
            <span className="timeline-role">Full Stack Developer Intern</span>
            <ul className="timeline-bullets">
              <li>Built and maintained web application features using React and Node.js</li>
              <li>Optimized API response times through query tuning and caching strategies</li>
              <li>Collaborated with cross-functional team on feature delivery and code reviews</li>
            </ul>
          </article>
        </div>

        <div className="timeline-node">
          <div className="timeline-marker" />
          <article className="timeline-content">
            <span className="timeline-date">2022 – 2026 (Expected)</span>
            <h3>IFet College of Engineering</h3>
            <span className="timeline-role">Bachelor of Engineering — Computer Science</span>
            <ul className="timeline-bullets">
              <li>Relevant coursework: Data Structures, Algorithms, Database Management, Web Development</li>
              <li>Built multiple full-stack projects as part of academic curriculum</li>
              <li>Active participant in hackathons and coding competitions</li>
            </ul>
          </article>
        </div>
      </div>
    </motion.section>
  );
}

const Resume = () => {
  return (
    <div className="tw-container pt-6">
      <h1>My Resume</h1>

      <div className="resume my-6">
        <h2 className="text-2xl">Summary</h2>
        <p>
          Recent graduate of UC Berkeley, with a background in computer science.
          Highly motivated to contribute to a high-performing team, and
          passionate about using technology to make a positive impact.
        </p>

        <h2 className="text-2xl">Experience</h2>
        <h3 className="text-xl">Software Developer Intern at Google</h3>
        <p>June 2021 - Present</p>
        <ul className="list-disc pl-8">
          <li>
            Worked on a large-scale web application that helps businesses manage
            their inventory
          </li>
          <li>
            Built and maintained a range of features, including a
            barcode-scanning integration
          </li>
          <li>
            Collaborated with a cross-functional team to deliver high-quality
            code
          </li>
        </ul>

        <h2 className="text-2xl">Education</h2>
        <h3 className="text-xl">B.S. Computer Science</h3>
        <p>University of California, Berkeley</p>
        <p>Class of 2023</p>
      </div>
    </div>
  );
};

export default Resume;

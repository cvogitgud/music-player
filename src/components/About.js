import walrus_viking from '../data/img/walrus viking.jpeg';

const About = () => {
  return (
    <div className="info mt-5 basis-1/3 flex flex-col items-center justify-center">
      <img
        src={walrus_viking}
        alt="walrus viking"
        className="rounded-full size-1/2 ml-5"
      />
      <p>sidebar? other links? spotify options? about me? du ma</p>
    </div>
  );
};

export default About;

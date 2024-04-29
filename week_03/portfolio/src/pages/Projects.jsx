import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getRandomHexColor } from '../lib/utils';

const Projects = () => {
  const {
    data: projects,
    isLoading,
    error,
  } = useFetch('https://dummyjson.com/posts?limit=10');

  return (
    <div className="tw-container pt-6">
      <h1>My Projects</h1>

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading...</p>}

      {projects && projects.posts && projects.posts.length > 0 && (
        <ul>
          {projects.posts.map((project) => (
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              className="my-8 flex gap-4"
            >
              <img
                src={`https://placehold.co/600x400/${getRandomHexColor().replace('#', '')}/white?font=roboto&text=${project?.body.split(' ').slice(0, 2).join('%20')}`}
                alt="project logo"
                className="w-60 rounded-md"
              />
              <div className="flex flex-col gap-4">
                <h3>{project.title}</h3>
                <p>{project.body.slice(0, 25)}...</p>
              </div>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;

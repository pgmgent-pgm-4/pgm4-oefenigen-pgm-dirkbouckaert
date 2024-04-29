import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getRandomHexColor } from '../lib/utils';

const Project = () => {
  const { id } = useParams();
  const {
    data: project,
    isLoading,
    error,
  } = useFetch(`https://dummyjson.com/posts/${id}`);

  const imgBgColor = getRandomHexColor().replace('#', '');
  const imgTxt = project?.body.split(' ').slice(0, 2).join('%20');

  return (
    <div className="tw-container">
      <div className="flex gap-2 text-lime-700 transition hover:text-lime-600">
        <Link to="/projects">← Back to all projects</Link>
      </div>

      <h1>{project?.title || 'Project'}</h1>

      {error && <p>{error.message}</p>}

      {isLoading && <p>Loading...</p>}

      <img
        src={`https://placehold.co/600x400/${imgBgColor}/white?font=roboto&text=${imgTxt}`}
        alt="project logo"
        className="my-6 w-60 rounded-md"
      />

      <div className="my-6 flex flex-wrap items-center gap-2">
        {project?.tags?.map((tag) => (
          <span key={tag} className="badge badge-secondary">
            {tag}
          </span>
        ))}
      </div>

      <div className="prose">{project?.body}</div>
    </div>
  );
};

export default Project;

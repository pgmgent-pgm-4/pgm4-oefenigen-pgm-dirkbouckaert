const HelloWorld = ({ name = null }) => {
  return (
    <h1 className="text-4xl">{name ? `Hello, ${name}!` : 'Hello, World!'}</h1>
  );
};

export default HelloWorld;

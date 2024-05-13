const LoginForm = ({ formData, handleOnChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="my-8 max-w-md space-y-6">
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          className="rounded-lg"
          type="email"
          name="email"
          id="email"
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <input
          className="rounded-lg"
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;

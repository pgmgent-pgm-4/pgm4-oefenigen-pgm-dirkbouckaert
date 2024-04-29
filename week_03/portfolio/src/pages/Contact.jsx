const Contact = () => {
  return (
    <div className="tw-container grid place-items-center pt-6">
      <h1>Contact Me</h1>

      <form className="w-full max-w-sm">
        <label className="mb-2 block" htmlFor="name">
          Name
        </label>
        <input
          className="block w-full rounded-md border px-4 py-2"
          type="text"
          name="name"
          id="name"
          required
        />

        <label className="mb-2 mt-4 block" htmlFor="email">
          Email
        </label>
        <input
          className="block w-full rounded-md border px-4 py-2"
          type="email"
          name="email"
          id="email"
          required
        />

        <label className="mb-2 mt-4 block" htmlFor="message">
          Message
        </label>
        <textarea
          className="block w-full rounded-md border px-4 py-2"
          name="message"
          id="message"
          rows="4"
          required
        ></textarea>

        <button className="btn btn-secondary mt-6 w-full" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;

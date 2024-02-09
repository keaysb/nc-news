export default function ErrorHandler(error) {
  const {
    error: {
      err: { message },
    },
  } = error;

  return (
    <>
      <section className="section is-medium">
        <h2 className="title is-2 has-text-centered">Something went wrong</h2>
        <p className="subtitle is-3 has-text-centered">{message}</p>
      </section>
    </>
  );
}
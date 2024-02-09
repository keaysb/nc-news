export default function IsLoading() {
  return (
    <>
    <section className="section is-small">
      <h3 className="title is-4 has-text-centered">Building...</h3>
      <progress className="progress is-danger is-small is-centered" max="100">
        15%
      </progress>
    </section>
    </>
  );
}

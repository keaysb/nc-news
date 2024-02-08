export function ErrorHandler (error) {
    const {error : {err : {message}}} = error
   const {error : {err : {response : {status}}}} = error

return (
    <>
     <section className="section is-medium">
         <h2 className="title is-2 has-text-centered">Something went wrong</h2>
         <h3 className="title is-3 has-text-centered">Status Code: {status}</h3>
         <p className="subtitle is-3 has-text-centered">{message}</p>
     </section>
    </>
)
}
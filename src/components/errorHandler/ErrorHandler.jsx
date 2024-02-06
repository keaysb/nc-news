export function ErrorHandler (error) {
    const {error : {err : {message}}} = error
   const {error : {err : {response : {status}}}} = error

    console.log(status)
return (
    <>
    <h2 className="title is-2 has-text-centered">Something went wrong</h2>
    <h3 className="title is-3 has-text-centered">{status}<br/>{message}</h3>

    </>
)
}
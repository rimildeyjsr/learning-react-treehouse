function Application() {
    //components are created with capitalized names.
    return (
        <div>
            <h1>Hello from react!</h1>
            <p>I was rendered from the application component!</p>
        </div>
    );
}




ReactDOM.render(<Application/>,document.getElementById('container'));
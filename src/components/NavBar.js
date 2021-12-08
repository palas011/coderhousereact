function NavBar(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                   <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#"> <b> LOGO </b> </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Motherboards</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Procesadores</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Memorias</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Placas de video</a>
                            </li>
                        </ul>
                </div>

            </div>
        </nav>
    )
}

export default NavBar;/*exporto funcion para que cualquiera pueda importarla*/
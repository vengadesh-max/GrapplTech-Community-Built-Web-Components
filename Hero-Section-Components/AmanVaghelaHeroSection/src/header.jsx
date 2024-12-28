function Header(){
      return(
            <div className="main">
                  <div className="header">
                        <div>
                              <img className="imgicon" src="../logo.jpeg"></img>
                        </div>
                        <div>
                              <input className="search-input" type="text" placeholder="search"></input>
                        </div>
                        <div className="tmain">
                              <a className="ticone"><i class="fa-regular fa-bell"></i></a>
                              <a className="ticone"><i class="fa-regular fa-heart"></i></a>
                              <a className="ticone"><i class="fa-regular fa-user"></i></a>
                        </div>
                  </div>
                  <div className="headersec">
                        <a className="headera">Home</a>
                        <a className="headera">Games</a>
                        <a className="headera">Abouts</a>
                        <a className="headera">ContactUs</a>
                  </div>
            </div>
      )
}

export {Header};
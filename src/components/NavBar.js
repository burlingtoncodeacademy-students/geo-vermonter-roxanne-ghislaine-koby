import '../styles/NavBar.css'

function NavBar(props) {


    return(
        
        <div id="navbar">
            <div>Home</div>
            <div onClick={props.openAboutModal}>About</div>
            <div>High Scores</div>
        </div>
    )
}

export default NavBar
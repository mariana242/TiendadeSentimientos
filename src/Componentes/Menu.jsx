import logo from "../assets/logo.png"

const Menu = () => {
	return (
		<section className="navegador">



			<header>


				<img className="logo" src={logo} alt=""></img>
				<nav>
					<ul className="nav__links">
						<li><a href="/">INICIO</a></li>
						<li><a href="/productos">PRODUCTOS</a></li>

					</ul>
				</nav>



			</header>

		</section>
	)
}

export default Menu
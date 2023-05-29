import Menu from "../Componentes/Menu.jsx"
import banner from "../assets/banner.jpg"

const Home = () => {
	return (

		<section>
			<Menu />
			<section className="banner" >
				<img className="bannerImg" src={banner} height="400"></img>
			</section>

			<section >

				<section className="texto">


					<h1>TIENDA HELLO KITTY</h1>


					<p>   La tienda de Hello Kitty es un lugar encantador y colorido que captura perfectamente la esencia de este icónico personaje. Al entrar, te recibirán paredes pintadas de rosa suave, adornadas con grandes murales y decoraciones temáticas de Hello Kitty. El ambiente es acogedor y lleno de alegría, creado especialmente para los amantes de esta famosa gatita.

						El interior de la tienda está cuidadosamente diseñado para reflejar la dulzura y la ternura de Hello Kitty. Los estantes están repletos de una amplia variedad de productos, desde juguetes y peluches hasta ropa, accesorios, artículos para el hogar y artículos de papelería. Encontrarás una gran selección de artículos de edición limitada y exclusivos que no se encuentran en ningún otro lugar.

						Los empleados de la tienda están vestidos con uniformes temáticos de Hello Kitty y te reciben con una sonrisa amable. Son amigables y están dispuestos a ayudarte a encontrar el regalo perfecto o responder cualquier pregunta que puedas tener.

						La música alegre y las melodías pegajosas de Hello Kitty llenan el aire, creando un ambiente lúdico y divertido. También puedes encontrarte con ocasiones especiales en la tienda, como eventos de lanzamiento de productos, firmas de autógrafos o actividades interactivas para los fans. ​</p>



				</section>
			</section>


		</section >






	)
}

export default Home
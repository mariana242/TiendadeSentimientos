import Datos from "../assets/Productos.json"
import imagen from "../assets/hello.jpg"

const datos = Datos.productos


const Tarjeta = () => {
	return (
		<div className="contenido">


			{
				datos.map((dato) => (
					<section className="tarjeta">
						<img className="imagen" src={imagen}></img>

						<section className="titulos">
							<p >Nombre:</p>
							<p >Info:</p>
							<p >Precio:</p>
							<p >Categoria:</p>
							<p >En tienda:</p>
							<p >Stock:</p>

						</section >
						<section className="datos">
							<p >{dato.nombre}</p>
							<p>{dato.descripcion}</p>
							<p>{dato.precio}</p>
							<p>{dato.categoria}</p>
							<p>{dato.tienda}</p>
							<p>{dato.disponibilidad}</p>






						</section >
					</section >




				))

			}




		</div >

	);
};




export default Tarjeta
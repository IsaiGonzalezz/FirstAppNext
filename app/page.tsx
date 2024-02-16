import Image from "next/image";
//import styles from "./page.module.css";
import styles from "@/styles/index.module.css"

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <a href="#">Home</a>
          <a href="#">Acerca de</a>
        </nav>

        <div>
          <h2>ISAI GONZALEZ TI03SM-22:</h2>
        </div>
        <div> 
        <img
            src="https://img.freepik.com/vector-gratis/lindo-pavo-pajaro-pollo-dibujos-animados-vector-icono-ilustracion-animal-naturaleza-icono-concepto-aislado-plano_138676-4719.jpg"
            alt="Gogogro gogoro gogoro"
            width="400" />
        </div>
      </div>
    </main>
  );
}
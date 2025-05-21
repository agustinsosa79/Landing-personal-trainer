import '../styles/sobremi.css'
import '../public/images/Foto-sobremi.png'

export function Sobremi() {
  return (
    <section className="sobremi">
  <div className="sobremi__container">
    <div className="sobremi__img">
      <img src="../public/images/Foto-sobremi.png" alt="Nazareno Salerno" />
    </div>

    <div className="sobremi__info">
      <h2 className="sobremi__title">¿Quién soy?</h2>
      <div className="sobremi__text">
        <p>¡Hola! Soy Nazareno Salerno, tengo 20 años y probablemente compartimos la pasión por el gimnasio y el bienestar físico...</p>
        <p>Mi misión es ayudarte a descubrir tu mejor versión, esa que a veces creemos lejana pero que está mucho más cerca de lo que imaginamos...</p>
        <p>Todos los días busco aprender algo nuevo sobre entrenamiento, nutrición y desarrollo personal...</p>
      </div>
      <div className="sobremi__extra">
        <span>💪 Disciplina</span>
        <span>🧠 Mentalidad</span>
        <span>🥗 Salud</span>
        <span>🔥 Motivación</span>
      </div>
    </div>
  </div>
</section>
  )
}
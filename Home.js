import WeatherApp from './WeatherApp'
import NavHeader from './NavHeader.js'

export default function Home() {
    return (
      <>
        <header>
          <NavHeader></NavHeader>
        </header>
        <section>
          <WeatherApp></WeatherApp>
        </section>
      </>
    )
}
import { useSelector } from 'react-redux'
import AnalogClock from '../analogClock/analogClock.jsx'
import './App.scss'

function App() {
    const citiesReducer = state => state.citiesReducer
    const { cities } = useSelector(citiesReducer)

    return (
        <div className="app">
            <header className="header app__header">
                <h1 className="container header__container">React Clock App</h1>
            </header>

            <main className="main app__main">
                <div className="container main__container">
                    <div className="layout">
                        <div className="layout__list">
                            <div className="layout__item">
                                <AnalogClock cities={cities} defaultCity="0" />
                            </div>
                            <div className="layout__item">
                                <AnalogClock cities={cities} defaultCity="1" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer className="footer app__footer">
                <div className="container footer__container">
                    <a
                        className="author"
                        href="https://kot6eremot.tk/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Junior+ React Developer Minibaev Shamil
                    </a>
                </div>
            </footer>
        </div>
    )
}

export default App

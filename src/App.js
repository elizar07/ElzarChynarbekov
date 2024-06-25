import './App.css'
import About from './components/About'
import Acardion from './components/Acardion'
import Contact from './components/Contact'
import Footer from './components/Footer copy'
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Price from './components/Price'
import Services from './components/Services'
export const App = () => {
	return (
		<div className='App'>
			<Header />
			<Home />
			<Services />
			<About />
			<Price />
			<Acardion />
			<Portfolio />
			<Contact />
			<Footer />
		</div>
	)
}

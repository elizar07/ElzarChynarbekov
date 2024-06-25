import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import RootContext from './context/RootContext'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<BrowserRouter>
		<RootContext>
			<App />
		</RootContext>
	</BrowserRouter>
)

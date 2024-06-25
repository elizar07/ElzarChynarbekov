import React, { useState } from 'react'
import { MainContext } from '.'

const RootContext = ({ children }) => {
	const [main, setMain] = useState(false)

	return (
		<MainContext.Provider
			value={{
				main,
				setMain
			}}
		>
			{children}
		</MainContext.Provider>
	)
}

export default RootContext

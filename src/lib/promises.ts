export const oneSecDelayedPromise = async () => {
	const date = new Date()
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return date
}

export const timePromises = async () => ({
	awaited: Promise.resolve(new Date().getTime()),
	streamed: { date: Promise.resolve(new Date().getTime()) },
})

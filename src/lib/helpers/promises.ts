export const oneSecDelayedPromise = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000))
	return new Date().getTime() - 1000
}

export const timePromises = async () => ({
	awaited: Promise.resolve(new Date().getTime()),
	streamed: { date: oneSecDelayedPromise() },
})

export const getInitials = (text: string) => {
	const [path1, path2] = text.split(" ") as [string, string | undefined]

	if (!path2) {
		return path1.length <= 4
			? path1
			: path1.slice(0, 3)
	}

	return `${getFirstLetter(path1)}${getFirstLetter(path2)}`
}

export const getFirstLetter = (text: string) => text.charAt(0)

export const firstLetterUppercase = (text: string) => {
	return getFirstLetter(text).toUpperCase() + text.slice(1)
}
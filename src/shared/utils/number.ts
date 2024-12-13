export const numberFormat = (
	locales?: Intl.LocalesArgument,
	options?: Intl.NumberFormatOptions
) => new Intl.NumberFormat(locales, options)
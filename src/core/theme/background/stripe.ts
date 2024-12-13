const createStripeGradient = (stripeColor: string, backgroundColor: string) =>
	`linear-gradient(45deg,  rgb(var(--${stripeColor})) 25%,  rgb(var(--${backgroundColor})) 25%,  rgb(var(--${backgroundColor})) 50%,  rgb(var(--${stripeColor})) 50%,  rgb(var(--${stripeColor})) 75%,  rgb(var(--${backgroundColor})) 75%,  rgb(var(--${backgroundColor})))`

export const backgroundStripe = {
	"stripe-gradient-default": createStripeGradient("default-200", "default-400"),
	"stripe-gradient-primary": createStripeGradient("primary-200", "primary"),
	"stripe-gradient-secondary": createStripeGradient("secondary-200", "secondary"),
	"stripe-gradient-success": createStripeGradient("success-200", "success"),
	"stripe-gradient-warning": createStripeGradient("warning-200", "warning"),
	"stripe-gradient-danger": createStripeGradient("danger-200", "danger"),
}
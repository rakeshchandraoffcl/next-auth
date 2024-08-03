import { CardWrapper } from "./card-wrapper";

export const LoginForm = () => {
	return (
		<CardWrapper
			headerLabel="Welcome back"
			backButtolLabel="Don't have an account?"
			backButtonHref="/auth/register"
			showSocial
		>
			<div>LoginForm</div>
		</CardWrapper>
	);
};

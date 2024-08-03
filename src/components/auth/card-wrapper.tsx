"use client";

import {
	Card,
	CardContent,
	CardHeader,
	CardFooter,
} from "@/components/ui/card";
import { Header } from "./Header";
import { Social } from "./Social";
import { BackButton } from "./back-button";

interface CardWrapperProps {
	children: React.ReactNode;
	headerLabel: string;
	backButtolLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export const CardWrapper = ({
	children,
	headerLabel,
	backButtolLabel,
	backButtonHref,
	showSocial,
}: CardWrapperProps) => {
	return (
		<Card className="w-[400px] shadow-md">
			<CardHeader>
				<Header label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			{showSocial && (
				<CardFooter>
					<Social />
				</CardFooter>
			)}
			<CardFooter>
				<BackButton label={backButtolLabel} href={backButtonHref} />
			</CardFooter>
		</Card>
	);
};

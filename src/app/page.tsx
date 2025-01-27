import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const fonts = Poppins({
	subsets: ["latin"],
	weight: ["600"],
});
export default function Home() {
	return (
		<main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]  from-sky-400 to-blue-800">
			<div className="space-y-6 text-center">
				<h1
					className={cn(
						"font-semibold text-6xl text-white drop-shadow-md",
						fonts.className
					)}
				>
					Auth
				</h1>
				<p className="text-lg text-white">A simple authentication system</p>
				<div>
					<LoginButton>
						<Button>SIgn In</Button>
					</LoginButton>
				</div>
			</div>
		</main>
	);
}

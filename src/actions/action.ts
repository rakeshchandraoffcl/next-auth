"use server";

import { loginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof loginSchema>) => {
	const validatedValues = loginSchema.safeParse(values);
	if (!validatedValues.success) {
		throw new Error("Invalid fields");
	}

	return { data: "Email sent" };
};

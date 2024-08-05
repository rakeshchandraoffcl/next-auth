"use server";

import { registerSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
	const validatedValues = registerSchema.safeParse(values);
	if (!validatedValues.success) {
		throw new Error("Invalid fields");
	}

	return { data: "Email sent" };
};

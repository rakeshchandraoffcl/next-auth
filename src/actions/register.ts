"use server";

import { db } from "@/lib/db";
import { registerSchema } from "@/schemas";
import * as z from "zod";

export const register = async (values: z.infer<typeof registerSchema>) => {
	const validatedValues = registerSchema.safeParse(values);
	const users = await db.user.findMany();
	console.log({ users });
	if (!validatedValues.success) {
		throw new Error("Invalid fields");
	}

	return { data: "Email sent" };
};

// pages/api/waitlist.ts
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        const response = await db.email.create({
            data: {
                email: email
            }
        });

        return NextResponse.json(response);
    } catch (error) {
        console.error('Error adding email to the waitlist:', error);
        return new NextResponse(('Internal server error'));
    }
}

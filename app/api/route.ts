import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function GET() {

    const [translationsRes] = await Promise.all([
        supabase.from("folders").select("*"),
    ]);

    console.log(translationsRes.data);
    return NextResponse.json(translationsRes);
}
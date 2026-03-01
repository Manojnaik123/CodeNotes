import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";

export async function GET() {

    const [translationsRes] = await Promise.all([
        supabase.from("BudgetTransactionCategoryTranslation").select("*"),
    ]);


    console.log(translationsRes.data);


    return NextResponse.json(translationsRes);
}
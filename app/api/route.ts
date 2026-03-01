import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    "https://oikjefdnymfghsbtznub.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9pa2plZmRueW1mZ2hzYnR6bnViIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkxNzg3NzksImV4cCI6MjA4NDc1NDc3OX0.AH-V3gFKSX564PGltXn3IE2ieZ6RU___oK5xCtGVkgI"
)
// export default client;


export async function GET() {

      const [ translationsRes] = await Promise.all([
            supabase.from("BudgetTransactionCategoryTranslation").select("*"),
        ]);

    // const { data, error } = await client
    //     .from("User")
    //     .select("*");

    // if (error) {
    //     return NextResponse.json({ error: error.message }, { status: 500 });
    // }

    console.log(translationsRes.data);


    return NextResponse.json(translationsRes);
}
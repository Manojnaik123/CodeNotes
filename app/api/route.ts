import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
)
// export default client;


export async function GET() {

      const [ translationsRes] = await Promise.all([
            supabase.from("folders").select("*"),
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
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    'https://yvctddhttqofusinjscs.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Y3RkZGh0dHFvZnVzaW5qc2NzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIzMTE4NDEsImV4cCI6MjA4Nzg4Nzg0MX0.fhUutDDUSFxjiZqgtFjJizrsVwwpWOS88MAaNXXNNEw'
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
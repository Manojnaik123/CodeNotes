import { NextResponse } from "next/server";
import supabase from "@/lib/supabase";
import { Folder, FolderRow } from "@/models/folder";

export async function GET() {
    const { data, error } = await supabase
        .from("folders")
        .select("*")
        .returns<FolderRow[]>();

    if (error) {
        return NextResponse.json(
            { error: error.message },
            { status: 500 }
        );
    }

    const folders: Folder[] = data.map((row)=> ({
        id: row.id,
        folderName: row.folder_name,
        createdAt: row.created_at,
    }))

    return NextResponse.json({ folders: folders });
}
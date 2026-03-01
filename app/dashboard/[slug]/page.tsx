import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Copy, Pencil } from 'lucide-react';
import SlugCard from '@/components/custom/slug-card';
import { Separator } from "@/components/ui/separator";
import { createClient } from '@supabase/supabase-js';
import { error } from 'console';

const supabase = createClient(
    'https://yvctddhttqofusinjscs.supabase.co',
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2Y3RkZGh0dHFvZnVzaW5qc2NzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3MjMxMTg0MSwiZXhwIjoyMDg3ODg3ODQxfQ.H-i7dHygO2MV1-pIzYMReFPNU8fiAAbcvrZeSGPUhbk"
)


const page = async () => {

    const [folders] = await Promise.all([
        supabase.from("folders").select("*"),
    ]);

    if(folders.error){
        console.log(folders.error.message);
    }

    console.log(folders.data);
    

    return (
        <>
            <div className='p-4'>
                <Input placeholder='Search...' />
            </div>
            <div className='px-4 flex justify-end'>
                {/* <Separator
                    orientation="horizontal"
                    className="mr-2 data-[orientation=vertical]:h-4"
                /> */}
                <span className='text-muted-foreground/50 text-xs'>
                    Total 5 items
                </span>
            </div>
            <div className='p-4 flex flex-col gap-4'>
                {new Array(5).fill(0).map(item => (
                    <SlugCard />
                ))}
            </div>
        </>
    )
}

export default page
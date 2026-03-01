import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Copy, Pencil } from 'lucide-react';
import SlugCard from '@/components/custom/slug-card';
import { Separator } from "@/components/ui/separator"

const page = () => {
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
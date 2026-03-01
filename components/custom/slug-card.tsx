import React from 'react'
import { Button } from '../ui/button'
import { Copy, Delete, Pencil, Trash } from 'lucide-react'

const SlugCard = () => {
    return (
        <div className='border p-4 bg-accent rounded-md flex flex-col gap-4'>
            <h1 className='text-accent-foreground/70 text-md'>Lorem ipsum</h1>
            <div className='text-muted-foreground border p-4 rounded-md text-sm'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae expedita perferendis natus eius nobis quibusdam totam nam! Enim cum optio nihil fugiat quisquam saepe aut debitis natus neque quidem?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae expedita perferendis natus eius nobis quibusdam totam nam! Enim cum optio nihil fugiat quisquam saepe aut debitis natus neque quidem?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae expedita perferendis natus eius nobis quibusdam totam nam! Enim cum optio nihil fugiat quisquam saepe aut debitis natus neque quidem?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere vitae expedita perferendis natus eius nobis quibusdam totam nam! Enim cum optio nihil fugiat quisquam saepe aut debitis natus neque quidem?
            </div>
            <div className=' flex justify-end gap-4 '>
                <Button variant="link">
                    <Copy />
                </Button>
                <Button variant="outline">
                    <Pencil />
                </Button>
                <Button variant="destructive">
                    <Trash/>
                </Button>
            </div>
        </div>
    )
}

export default SlugCard
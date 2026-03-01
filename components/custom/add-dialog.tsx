import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus } from "lucide-react"
import { Textarea } from "../ui/textarea"

export function DialogDemo() {
    return (
        <Dialog >
            <form>
                <DialogTrigger asChild>
                    <Button size="sm">
                        <Plus /> Add
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-lg">
                    <DialogHeader>
                        <DialogTitle>Add new item</DialogTitle>
                        <DialogDescription>
                            Fill the form with appropriate values. Click save when you're done. 
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Title</Label>
                            <Input required id="name-1" name="name" placeholder="Add title..." />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Content</Label>
                            <Textarea placeholder="Add content.." className="h-30" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

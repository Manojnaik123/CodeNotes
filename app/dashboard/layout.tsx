import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

// import { Button } from "@/components/ui/button"
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
// import { Field, FieldGroup } from "@/components/ui/field"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

import {
    Plus,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { DialogDemo } from "@/components/custom/add-dialog"
import { createClient } from "@/lib/supabase/server"
import { log } from "console"

export default async function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <SidebarProvider>
                <AppSidebar />
                <SidebarInset>
                    <header className="flex h-16 shrink-0 items-center gap-2">
                        <div className="flex items-center gap-2 px-4 w-full">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mr-2 data-[orientation=vertical]:h-4"
                            />
                            <Breadcrumb>
                                <BreadcrumbList>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink>
                                            Coding
                                        </BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {/* <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem> */}
                                </BreadcrumbList>
                            </Breadcrumb>

                            <div className="ml-auto">

                                <DialogDemo />
                            </div>

                        </div>
                    </header>
                    <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                        <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min">
                            {children}
                        </div>
                    </div>
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}

"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog";
import { PlusIcon } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

type Props = {};

const CreateNoteDialog = (props: Props) => {
    const [input, setInput] = React.useState("");

    return (
        <Dialog>
            <DialogTrigger>
                <div
                    className="flex border-dashed border-2 border-fuchsia-700 h-full rounded-lg 
                items-center justify-center sm:flex-col hover:shadow-xl transition 
                hover:-translate-y-1 flex-row p-4"
                >
                    <PlusIcon
                        className="w-6 h-6 text-fuchsia-700"
                        strokeWidth={3}
                    />
                    <h2 className="font-semibold text-fuchsia-700 sm:mt-2">
                        New Note Book
                    </h2>
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>New Note Book</DialogTitle>
                    <DialogDescription>
                        You can create a new notebook here
                    </DialogDescription>
                </DialogHeader>
                <form>
                    <Input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Note book Name"
                    />
                    <div className="h-4"></div>
                    <div className="flex items-center gap-2">
                        <Button type="reset" variant={"secondary"}>
                            Cancel
                        </Button>
                        <Button type="submit" className="bg-fuchsia-700">
                            Create
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateNoteDialog;

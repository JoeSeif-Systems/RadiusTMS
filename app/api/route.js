import { NextResponse } from "next/server";

export async function GET () {
    return NextResponse.json({
        Hello : "World!",
        BackEndEngine : "RADI TMS V 1.0.24",
        Flag : "Happy Hacking!"
    })
}
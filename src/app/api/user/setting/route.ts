// src/app/api/user/setting/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, name, email, password } = body;

    const dataToUpdate: any = {
      name,
      email,
    };

    if (password) {
      const hashedPassword = await hash(password, 12); // hash dulu
      dataToUpdate.password = hashedPassword;
    }

    const updatedUser = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Failed to update user:", error);
    return new NextResponse("Failed to update user", { status: 500 });
  }
}

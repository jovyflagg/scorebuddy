import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import constants from "@/utils/constants";

export const GET = async () => {
  try {
    const categories = await prisma.category.findMany();

    return new NextResponse(JSON.stringify(categories, { status: constants.apiStatusCode.ok }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: constants.apiErrorMessage.unknown }, { status: constants.apiStatusCode.serverError })
    );
  }
};


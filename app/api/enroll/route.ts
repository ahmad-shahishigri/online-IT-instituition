import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// POST request handle karega (jab form submit ho)
export async function POST(req: Request) {
  try {
    // frontend se bheje gaye data ko parse karo
    const body = await req.json();

    // data save karne ke liye JSON file ka path define karo
    const filePath = path.join(process.cwd(), "data", "enrollments.json");
    console.log("Saving file at:", filePath);
    // pehle se data exist karta hai to use read karo, warna empty array le lo
    let existingData: any[] = [];
    
    try {
      const fileData = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileData);
    
    } catch (err) {
      existingData = [];
    }

    // naya data add karo
    existingData.push({
      ...body,
      createdAt: new Date().toISOString(),
    });

    // file me dubara likh do
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));
    console.log("Saving file at:", filePath);
    // response bhejo frontend ko
    return NextResponse.json({ success: true, message: "Enrollment saved!" });
  } catch (error) {
    console.error("Error saving enrollment:", error);
    return NextResponse.json(
      { success: false, message: "Server error occurred" },
      { status: 500 }
    );
  }
}


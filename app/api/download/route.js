import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request) {
  const localApkPath = path.join(process.cwd(), "public", "RoadmapFinder.apk");
  
  // If running locally or on server with file in public, redirect to static asset URL
  if (fs.existsSync(localApkPath)) {
    const origin = request.nextUrl.origin;
    return NextResponse.redirect(`${origin}/RoadmapFinder.apk`);
  }

  // High availability fallback to Expo EAS cloud artifact
  const fallbackUrl = "https://expo.dev/artifacts/eas/0nVtm1Dt_Qtu36h-0F7Ivk4iBauU1L7ISJ6-B49KuIc.apk";
  return NextResponse.redirect(fallbackUrl);
}

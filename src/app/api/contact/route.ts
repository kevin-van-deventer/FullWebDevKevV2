export const runtime = "edge";

export async function POST(req: Request) {
  try {
    let formData;
    try {
      formData = await req.json();
    } catch (e) {
      return new Response(
        JSON.stringify({ success: false, error: "SERVER ERROR: Invalid request payload." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    let apiKey = "";
    try {
      if (typeof process !== "undefined" && process.env) {
        apiKey = process.env.RESEND_API_KEY || "";
      }
    } catch (e) {
      console.error("Environment variable access error:", e);
    }

    if (!apiKey || apiKey.trim() === "") {
      return new Response(
        JSON.stringify({ success: false, error: "SERVER ERROR: RESEND_API_KEY is missing." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    let response;
    try {
      response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey.trim()}`,
        },
        body: JSON.stringify({
          from: "FullWebDevKev <onboarding@resend.dev>",
          to: ["kevinlenovomail@gmail.com"],
          subject: `🚀 New Mission Briefing from ${formData.name}`,
          reply_to: formData.email,
          html: `
            <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 2px solid #000; padding: 20px; background-color: #f9f9f9;">
              <h2 style="background-color: #FFB800; padding: 10px; border: 2px solid #000; display: inline-block;">NEW MISSION BRIEFING</h2>
              <p><strong>Agent Name:</strong> ${formData.name}</p>
              <p><strong>Secure Email:</strong> ${formData.email}</p>
              <p><strong>Mission Type:</strong> ${formData.projectType.toUpperCase()}</p>
              <div style="border-top: 1px solid #ddd; margin-top: 20px; padding-top: 20px;">
                <p><strong>Project Intel:</strong></p>
                <p style="white-space: pre-wrap;">${formData.message}</p>
              </div>
            </div>
          `,
        }),
      });
    } catch (e) {
      return new Response(
        JSON.stringify({ success: false, error: "SERVER ERROR: Failed to connect to Resend API." }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await response.json();

    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: result.message || "Failed to send email" }),
        { status: response.status, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Unknown System Crash";
    return new Response(
      JSON.stringify({ success: false, error: `CRITICAL CRASH: ${errorMessage}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

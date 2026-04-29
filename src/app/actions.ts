"use server";

export async function sendEmail(formData: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  try {
    // 1. Check for the API Key
    const apiKey = process.env.RESEND_API_KEY;
    
    if (!apiKey || apiKey.trim() === "") {
      return { 
        success: false, 
        error: "SERVER ERROR: RESEND_API_KEY is missing or empty in Cloudflare settings." 
      };
    }

    // 2. Attempt the fetch
    const response = await fetch("https://api.resend.com/emails", {
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

    // 3. Handle the response
    let result;
    try {
      result = await response.json();
    } catch (e) {
      return { success: false, error: `API ERROR: Received invalid JSON from Resend (Status: ${response.status})` };
    }

    if (!response.ok) {
      return { 
        success: false, 
        error: `RESEND ERROR: ${result.message || "Unknown API error"} (Code: ${result.name || "N/A"})` 
      };
    }

    return { success: true };
  } catch (err) {
    return { 
      success: false, 
      error: `CRITICAL ERROR: ${err instanceof Error ? err.message : "System crash"}` 
    };
  }
}

"use server";

export async function sendEmail(formData: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("❌ MISSING API KEY: Please add RESEND_API_KEY to Cloudflare Environment Variables.");
    return { success: false, error: "Configuration Error: Missing API Key" };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
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

    const result = await response.json();

    if (!response.ok) {
      console.error("❌ Resend API Error:", result);
      return { success: false, error: result.message || "Failed to send email" };
    }

    console.log("✅ Email sent successfully:", result);
    return { success: true };
  } catch (err) {
    console.error("💥 Critical Fetch Error:", err);
    return { 
      success: false, 
      error: err instanceof Error ? err.message : "Internal Server Error" 
    };
  }
}

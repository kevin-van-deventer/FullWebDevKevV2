"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "FullWebDevKev <onboarding@resend.dev>", // Once verified, use admin@fullwebdevkev.com
      to: ["admin@fullwebdevkev.com"],
      subject: `🚀 New Mission Briefing from ${formData.name}`,
      replyTo: formData.email,
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
    });

    if (error) {
      console.error("Resend Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Server Action Error:", err);
    return { success: false, error: "Internal Server Error" };
  }
}

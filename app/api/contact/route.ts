import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { 
            firstName, 
            lastName, 
            email, 
            phone, 
            budget, 
            projectType, 
            message,
            formSource = "Contact Page" // Default source if not provided
        } = body;

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "team.techcole@gmail.com",
                pass: "veex xpiy vbti fuiv", // App password
            },
        });

        // Format form source for display
        const formSourceDisplay = formSource || "Contact Page";

        // Email content with TechCole theme
        const mailOptions = {
            from: "team.techcole@gmail.com",
            to: "team.techcole@gmail.com",
            subject: `New Contact Form Submission from ${firstName} ${lastName} - ${formSourceDisplay}`,
            html: `
                <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <div style="background: linear-gradient(135deg, #D12027 0%, #ff4444 100%); padding: 30px; text-align: center;">
                        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">TechCole</h1>
                        <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">New Contact Form Submission</p>
                    </div>
                    
                    <!-- Content -->
                    <div style="padding: 30px;">
                        <!-- Form Source Badge -->
                        <div style="background: #f8f9fa; border-left: 4px solid #D12027; padding: 12px 16px; margin-bottom: 24px; border-radius: 4px;">
                            <p style="margin: 0; color: #333; font-size: 14px;">
                                <strong>Form Source:</strong> 
                                <span style="color: #D12027; font-weight: 600;">${formSourceDisplay}</span>
                            </p>
                        </div>

                        <h2 style="color: #333; font-size: 20px; margin-bottom: 20px; border-bottom: 2px solid #eee; padding-bottom: 10px;">Contact Details</h2>
                        
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; width: 35%; color: #666; font-weight: 500;">First Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${firstName || "N/A"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 500;">Last Name</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${lastName || "N/A"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 500;">Email</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${email || "N/A"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 500;">Phone</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${phone || "N/A"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 500;">Budget</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${budget || "N/A"}</td>
                            </tr>
                            <tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-weight: 500;">Project Type</td>
                                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #333;">${projectType || "N/A"}</td>
                            </tr>
                        </table>

                        <div style="margin-top: 24px;">
                            <h3 style="color: #666; font-size: 14px; margin-bottom: 8px; font-weight: 500;">Message</h3>
                            <div style="background: #f8f9fa; padding: 16px; border-radius: 8px; border-left: 4px solid #D12027;">
                                <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message || "N/A"}</p>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer -->
                    <div style="background: #f8f9fa; padding: 20px 30px; text-align: center; border-top: 1px solid #eee;">
                        <p style="margin: 0; color: #999; font-size: 12px;">This email was sent from the TechCole website contact form.</p>
                        <p style="margin: 4px 0 0 0; color: #999; font-size: 12px;">© 2025 TechCole. All rights reserved.</p>
                    </div>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { success: true, message: "Email sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { success: false, message: "Failed to send email" },
            { status: 500 }
        );
    }
}

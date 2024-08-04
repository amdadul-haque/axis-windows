import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amdadul1807107@gmail.com',
        pass: 'ctyplxmrxbcoasox',
      }
    })

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const sendPersons = 'amdad.zatiq@gmail.com, admin@axisremodeling.com'

    const mailOption = {
      from: formData.email,
      // to: "amdad.zatiq@gmail.com",
      to: sendPersons,
      subject: `${formData.fullName} is looking for you.`,
      //     html: `
      //   <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 8px;">
      //     <h2 style="color: #333; margin-bottom: 10px;">New Inquiry Received</h2>
      //     <p style="font-size: 16px; line-height: 1.5; margin: 0;">You have received a new message from <strong>${formData.fullName || 'Anonymous'}</strong> (${formData.email || 'No email provided'}).</p>
      //     <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
      //     <h3 style="color: #555; margin-bottom: 8px;">Inquiry Details:</h3>
      //     <ul style="list-style: none; padding: 0; margin: 0;">
      //       ${Object.entries(formData).map(([key, value]) => `
      //         <li style="margin-bottom: 10px;">
      //           <strong style="color: #444;">${capitalizeFirstLetter(key)}:</strong> ${value}
      //         </li>
      //       `).join('')}
      //     </ul>
      //     <p style="font-size: 14px; color: #666;">Thank you for your attention. Please get back to the customer at your earliest convenience.</p>
      //     <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply to this email.</p>
      //   </div>
      // `,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4; border: 1px solid #ddd; border-radius: 8px;">
          <h2 style="color: #333; margin-bottom: 10px;">New Inquiry Received</h2>
          <p style="font-size: 16px; line-height: 1.5; margin: 0;">You have received a new message from <strong>${formData.fullName || 'Anonymous'}</strong> (${formData.email || 'No email provided'}).</p>
          <hr style="margin: 20px 0; border: 0; border-top: 1px solid #ddd;">
          <h3 style="color: #555; margin-bottom: 8px;">Inquiry Details:</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr>
                <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd; text-align: left;">Field</th>
                <th style="background-color: #f0f0f0; padding: 10px; border: 1px solid #ddd; text-align: left;">Value</th>
              </tr>
            </thead>
            <tbody>
              ${Object.entries(formData).map(([key, value]) => `
                <tr>
                  <td style="padding: 10px; border: 1px solid #ddd; color: #444; font-weight: bold;">${capitalizeFirstLetter(key)}</td>
                  <td style="padding: 10px; border: 1px solid #ddd;">${value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
          <p style="font-size: 14px; color: #666; margin-top: 20px;">Thank you for your attention. Please get back to the customer at your earliest convenience.</p>
          <p style="font-size: 12px; color: #999;">This is an automated message. Please do not reply to this email.</p>
        </div>`,
    }

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}


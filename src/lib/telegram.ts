type ContactMessage = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function escapeHtml(value: string): string {
  return value.replace(/[&<>]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
    };
    return entities[character];
  });
}

export function formatTelegramMessage(
  data: ContactMessage,
  submittedAt: string,
  timezone: string,
): string {
  return `
🔔 <b>New Contact Form Submission</b>

👤 <b>Name:</b> ${escapeHtml(data.name.trim())}
📧 <b>Email:</b> ${escapeHtml(data.email.trim())}
📱 <b>Phone:</b> ${escapeHtml(data.phone.trim())}

💬 <b>Message:</b>
${escapeHtml(data.message.trim())}

⏰ <b>Submitted:</b> ${escapeHtml(submittedAt)}
📍 <b>Timezone:</b> ${escapeHtml(timezone)}
  `.trim();
}
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "";
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "";

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("[contact] Missing RESEND_API_KEY");
      return NextResponse.json(
        { error: "Configuración de email incompleta." },
        { status: 500 }
      );
    }
    const resend = new Resend(apiKey);

    const body = await request.json();
    const { nombre, email, telefono, tipo, mensaje, origen } = body;

    if (!nombre || typeof nombre !== "string" || nombre.trim().length === 0) {
      return NextResponse.json(
        { error: "El nombre es obligatorio." },
        { status: 400 }
      );
    }

    const hasContact =
      (email && typeof email === "string" && email.trim().length > 0) ||
      (telefono && typeof telefono === "string" && telefono.trim().length > 0);

    if (!hasContact) {
      return NextResponse.json(
        { error: "Debes indicar al menos un email o un teléfono." },
        { status: 400 }
      );
    }

    if (!FROM_EMAIL || !TO_EMAIL) {
      console.error("[contact] Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL");
      return NextResponse.json(
        { error: "Configuración de email incompleta." },
        { status: 500 }
      );
    }

    const safe = (v: unknown) =>
      typeof v === "string" ? v.trim() : "—";

    const html = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#17111A;max-width:640px;margin:0 auto;padding:32px 24px;border:1px solid #EAEAFF;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:20px;color:#850E88;">Nueva consulta desde la web de Maclima</h2>
        <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
          <tr><td style="padding:6px 0;color:#5F5A66;width:140px;"><strong>Nombre</strong></td><td style="padding:6px 0;">${safe(nombre)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Email</strong></td><td style="padding:6px 0;">${safe(email)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Teléfono</strong></td><td style="padding:6px 0;">${safe(telefono)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Tipo de proyecto</strong></td><td style="padding:6px 0;">${safe(tipo)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;vertical-align:top;"><strong>Mensaje</strong></td><td style="padding:6px 0;white-space:pre-wrap;">${safe(mensaje)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Página de origen</strong></td><td style="padding:6px 0;">${safe(origen)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Fecha y hora</strong></td><td style="padding:6px 0;">${new Date().toLocaleString("es-ES")}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:13px;color:#9C97A5;">Este mensaje se ha enviado automáticamente desde el formulario de contacto de maclimasolucionesenergeticas.com</p>
      </div>
    `;

    const text = `
Nueva consulta desde la web de Maclima

Nombre: ${safe(nombre)}
Email: ${safe(email)}
Teléfono: ${safe(telefono)}
Tipo de proyecto: ${safe(tipo)}
Mensaje: ${safe(mensaje)}
Página de origen: ${safe(origen)}
Fecha y hora: ${new Date().toLocaleString("es-ES")}
    `.trim();

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: "Nueva consulta desde la web de Maclima",
      html,
      text,
      replyTo: typeof email === "string" && email.includes("@") ? email : undefined,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: "No se pudo enviar el email. Inténtalo más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: result.data?.id });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Error inesperado. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}

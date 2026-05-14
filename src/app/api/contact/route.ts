import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "";
const TO_EMAIL   = process.env.CONTACT_TO_EMAIL   ?? "";

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

    if (!FROM_EMAIL || !TO_EMAIL) {
      console.error("[contact] Missing CONTACT_FROM_EMAIL or CONTACT_TO_EMAIL");
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
      (email    && typeof email    === "string" && email.trim().length    > 0) ||
      (telefono && typeof telefono === "string" && telefono.trim().length > 0);

    if (!hasContact) {
      return NextResponse.json(
        { error: "Debes indicar al menos un email o un teléfono." },
        { status: 400 }
      );
    }

    const safe = (v: unknown) =>
      typeof v === "string" ? v.trim() : "—";

    const fecha = new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" });
    const userEmail = typeof email === "string" && email.includes("@") ? email.trim() : null;

    // ── Email interno para Maclima ─────────────────────────────
    const internalHtml = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#17111A;max-width:640px;margin:0 auto;padding:32px 24px;border:1px solid #EAEAFF;border-radius:16px;">
        <h2 style="margin:0 0 16px;font-size:20px;color:#850E88;">Nueva consulta desde la web de Maclima</h2>
        <table style="width:100%;border-collapse:collapse;font-size:15px;line-height:1.6;">
          <tr><td style="padding:6px 0;color:#5F5A66;width:140px;"><strong>Nombre</strong></td><td style="padding:6px 0;">${safe(nombre)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Email</strong></td><td style="padding:6px 0;">${safe(email)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Teléfono</strong></td><td style="padding:6px 0;">${safe(telefono)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Tipo de proyecto</strong></td><td style="padding:6px 0;">${safe(tipo)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;vertical-align:top;"><strong>Mensaje</strong></td><td style="padding:6px 0;white-space:pre-wrap;">${safe(mensaje)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Página de origen</strong></td><td style="padding:6px 0;">${safe(origen)}</td></tr>
          <tr><td style="padding:6px 0;color:#5F5A66;"><strong>Fecha y hora</strong></td><td style="padding:6px 0;">${fecha}</td></tr>
        </table>
        <p style="margin-top:24px;font-size:13px;color:#9C97A5;">Enviado automáticamente desde maclimasolucionesenergeticas.com</p>
      </div>
    `;

    const internalText = `
Nueva consulta desde la web de Maclima

Nombre: ${safe(nombre)}
Email: ${safe(email)}
Teléfono: ${safe(telefono)}
Tipo de proyecto: ${safe(tipo)}
Mensaje: ${safe(mensaje)}
Página de origen: ${safe(origen)}
Fecha y hora: ${fecha}
    `.trim();

    // ── Email de confirmación para el usuario ──────────────────
    const confirmHtml = `
      <div style="font-family:system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;color:#17111A;max-width:600px;margin:0 auto;padding:40px 28px;">
        <div style="border-bottom:3px solid #850E88;padding-bottom:20px;margin-bottom:28px;">
          <p style="margin:0;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#850E88;">Maclima Soluciones Energéticas</p>
        </div>
        <h1 style="margin:0 0 16px;font-size:22px;font-weight:900;line-height:1.3;color:#17111A;">Hemos recibido tu solicitud</h1>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#5F5A66;">
          Hola ${safe(nombre)},
        </p>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#5F5A66;">
          Hemos recibido tu consulta sobre <strong style="color:#17111A;">${safe(tipo)}</strong>. Revisaremos la información y nos pondremos en contacto contigo lo antes posible para orientarte sobre la solución más adecuada para tu proyecto.
        </p>
        <p style="margin:0 0 28px;font-size:15px;line-height:1.7;color:#5F5A66;">
          Si necesitas atención más rápida, puedes contactarnos directamente:
        </p>
        <div style="background:#F8F7FF;border:1px solid #EAEAFF;border-radius:12px;padding:20px 24px;margin-bottom:32px;">
          <p style="margin:0 0 8px;font-size:14px;color:#5F5A66;"><strong style="color:#17111A;">Teléfono:</strong> 919 91 44 91</p>
          <p style="margin:0;font-size:14px;color:#5F5A66;"><strong style="color:#17111A;">Email:</strong> info@maclimasolucionesenergeticas.com</p>
        </div>
        <p style="margin:0 0 4px;font-size:13px;color:#9C97A5;">Maclima Calor y Frío S.L.</p>
        <p style="margin:0;font-size:13px;color:#C4BFD0;">Este es un mensaje automático. No respondas directamente a este correo.</p>
      </div>
    `;

    const confirmText = `
Hemos recibido tu solicitud — Maclima

Hola ${safe(nombre)},

Hemos recibido tu consulta sobre ${safe(tipo)}. Revisaremos la información y nos pondremos en contacto contigo lo antes posible.

Si necesitas atención más rápida:
Teléfono: 919 91 44 91
Email: info@maclimasolucionesenergeticas.com

Maclima Calor y Frío S.L.
    `.trim();

    // ── Envío en paralelo ──────────────────────────────────────
    const [internalResult, confirmResult] = await Promise.all([
      resend.emails.send({
        from:    FROM_EMAIL,
        to:      TO_EMAIL,
        subject: "Nueva consulta desde la web de Maclima",
        html:    internalHtml,
        text:    internalText,
        replyTo: userEmail ?? undefined,
      }),
      userEmail
        ? resend.emails.send({
            from:    FROM_EMAIL,
            to:      userEmail,
            subject: "Hemos recibido tu solicitud — Maclima",
            html:    confirmHtml,
            text:    confirmText,
          })
        : Promise.resolve({ data: null, error: null }),
    ]);

    if (internalResult.error) {
      console.error("[contact] Internal email error:", internalResult.error);
      return NextResponse.json(
        { error: "No se pudo enviar el email. Inténtalo más tarde." },
        { status: 500 }
      );
    }

    if (confirmResult.error) {
      console.error("[contact] Confirmation email error:", confirmResult.error);
      return NextResponse.json(
        { error: "No se pudo enviar el email de confirmación. Inténtalo más tarde." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, id: internalResult.data?.id });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: "Error inesperado. Inténtalo más tarde." },
      { status: 500 }
    );
  }
}

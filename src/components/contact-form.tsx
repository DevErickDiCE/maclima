"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";

type ContactFormProps = {
  projectTypes: readonly string[];
  origen: string;
  eyebrow?: string;
  title?: string | null;
  textareaRows?: number;
  defaultTipo?: string;
};

export function ContactForm({
  projectTypes,
  origen,
  eyebrow = "Formulario de contacto",
  title = "Solicitud preparada para cliente final y profesional",
  textareaRows = 5,
  defaultTipo,
}: ContactFormProps) {
  const resolvedTipo =
    defaultTipo && (projectTypes as readonly string[]).includes(defaultTipo)
      ? defaultTipo
      : projectTypes[0];

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    tipo: resolvedTipo,
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          origen,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Error al enviar");
      }
      setStatus("success");
      setForm({ nombre: "", telefono: "", email: "", tipo: projectTypes[0], mensaje: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-[24px] border border-[#D9D9FF]/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F7FF_100%)] p-4 shadow-[0_20px_60px_rgba(133,14,136,0.11)] sm:rounded-[30px] sm:p-8 sm:shadow-[0_26px_80px_rgba(133,14,136,0.14)]">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-[#850E88] sm:text-sm">
        {eyebrow}
      </p>
      {title ? (
        <h2 className="mt-2.5 text-[1.55rem] font-black leading-tight text-[#17111A] sm:mt-3 sm:text-3xl">
          {title}
        </h2>
      ) : null}

      <form className="mt-4 grid gap-3.5 sm:mt-6 sm:gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-3.5 sm:grid-cols-2 sm:gap-4">
          <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-sm">
            Nombre
            <input
              name="nombre"
              type="text"
              placeholder="Tu nombre"
              value={form.nombre}
              onChange={handleChange}
              required
              className="min-h-13 rounded-xl border border-[#D9D9FF] bg-white px-4 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)] sm:min-h-14 sm:rounded-2xl"
            />
          </label>
          <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-sm">
            Teléfono
            <input
              name="telefono"
              type="tel"
              placeholder="Tu teléfono"
              value={form.telefono}
              onChange={handleChange}
              className="min-h-13 rounded-xl border border-[#D9D9FF] bg-white px-4 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)] sm:min-h-14 sm:rounded-2xl"
            />
          </label>
        </div>

        <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-sm">
          Email
          <input
            name="email"
            type="email"
            placeholder="Tu email"
            value={form.email}
            onChange={handleChange}
            className="min-h-13 rounded-xl border border-[#D9D9FF] bg-white px-4 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)] sm:min-h-14 sm:rounded-2xl"
          />
        </label>

        <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-sm">
          Tipo de proyecto
          <select
            name="tipo"
            value={form.tipo}
            onChange={handleChange}
            className="min-h-13 rounded-xl border border-[#D9D9FF] bg-white px-4 text-base font-semibold text-[#17111A] outline-none transition duration-200 ease-out focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)] sm:min-h-14 sm:rounded-2xl"
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-[11px] font-black uppercase tracking-[0.12em] text-[#850E88] sm:text-sm">
          Mensaje
          <textarea
            name="mensaje"
            rows={textareaRows}
            placeholder="Cuéntanos brevemente tu proyecto"
            value={form.mensaje}
            onChange={handleChange}
            className="rounded-xl border border-[#D9D9FF] bg-white px-4 py-3.5 text-base font-medium text-[#17111A] outline-none transition duration-200 ease-out placeholder:text-[#9C97A5] focus:border-[#850E88]/30 focus:shadow-[0_0_0_4px_rgba(133,14,136,0.08)] sm:rounded-2xl sm:py-4"
          />
        </label>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="group mt-1 inline-flex min-h-13 items-center justify-center gap-2 rounded-xl bg-[#850E88] px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_16px_38px_rgba(133,14,136,0.22)] transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-[#6f0b72] disabled:cursor-not-allowed disabled:opacity-70 sm:mt-2 sm:min-h-14 sm:py-4 sm:text-base sm:shadow-[0_18px_44px_rgba(133,14,136,0.24)]"
        >
          {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
          <ArrowRight className="h-5 w-5 transition duration-200 ease-out group-hover:translate-x-1" aria-hidden="true" />
        </button>
      </form>

      <div
        className={`mt-3 rounded-2xl border px-4 py-3 text-xs font-semibold leading-5 transition duration-200 ease-out sm:mt-4 sm:text-sm ${
          status === "success"
            ? "border-green-200 bg-green-50 text-green-800"
            : status === "error"
              ? "border-red-200 bg-red-50 text-red-800"
              : "border-[#D9D9FF]/70 bg-white text-[#7A7483]"
        }`}
      >
        {status === "success"
          ? "Solicitud enviada correctamente. Te contactaremos lo antes posible."
          : status === "error"
            ? "No se ha podido enviar el formulario. Puedes escribirnos directamente por WhatsApp."
            : "También puedes contactarnos directamente por WhatsApp para una respuesta más rápida."}
      </div>
    </div>
  );
}

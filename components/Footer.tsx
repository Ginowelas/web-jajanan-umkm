import { storeInfo, whatsappUrl } from "@/data/menu";

export function Footer() {
  return (
    <footer id="kontak" className="bg-charcoal px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-semibold">{storeInfo.name}</h2>
          <p className="mt-4 max-w-md leading-7 text-white/72">
            Jajanan pasar tradisional & Nasi box untuk arisan, hajatan, kantor, dan acara keluarga.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-cream-deep">Alamat</h3>
          <p className="mt-4 leading-7 text-white/72">
            {storeInfo.address}
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-cream-deep">Kontak</h3>
          <div className="mt-4 space-y-2 text-white/72">
            <p>
              WhatsApp:{" "}
              <a className="transition hover:text-cream" href={whatsappUrl} target="_blank" rel="noreferrer">
                {storeInfo.whatsappLabel}
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a className="transition hover:text-cream" href="https://instagram.com/" target="_blank" rel="noreferrer">
                {storeInfo.instagram}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/55">
        Copyright 2026 {storeInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}

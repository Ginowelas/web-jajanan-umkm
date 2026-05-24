import { InstagramIcon, LocationIcon, WhatsAppIcon } from "@/components/Icons";
import { storeInfo, whatsappUrl } from "@/data/menu";

export function Footer() {
  return (
    <footer id="kontak" className="bg-charcoal px-4 py-12 text-white">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-14 shrink-0 overflow-hidden rounded-full bg-white shadow-glow">
              <img
                src="/images/logo-warung-mak-menuk-header.png"
                alt="Logo Warung Mak Menuk"
                className="h-full w-full object-cover"
              />
            </span>
            <h2 className="text-2xl font-semibold">{storeInfo.name}</h2>
          </div>
          <p className="mt-4 max-w-md leading-7 text-white/72">
            Jajanan pasar tradisional & Nasi box untuk arisan, hajatan, kantor, dan acara keluarga.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-cream-deep">Alamat</h3>
          <a
            className="mt-4 flex items-start gap-3 leading-7 text-white/72 transition hover:text-cream"
            href={storeInfo.mapsUrl}
            target="_blank"
            rel="noreferrer"
          >
            <LocationIcon className="mt-1 size-5 shrink-0 text-cream-deep" />
            <span>{storeInfo.address}</span>
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-cream-deep">Kontak</h3>
          <div className="mt-4 space-y-3 text-white/72">
            <a
              className="flex items-center gap-3 transition hover:text-cream"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppIcon className="size-5 text-cream-deep" />
              <span>{storeInfo.whatsappLabel}</span>
            </a>
            <a
              className="flex items-center gap-3 transition hover:text-cream"
              href={storeInfo.instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon className="size-5 text-cream-deep" />
              <span>{storeInfo.instagram}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/55">
        Copyright 2026 {storeInfo.name}. All rights reserved.
      </div>
    </footer>
  );
}

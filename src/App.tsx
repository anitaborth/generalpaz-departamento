import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type IconName =
  | "home"
  | "pin"
  | "arrow"
  | "heart"
  | "share"
  | "grid"
  | "bed"
  | "kitchen"
  | "bath"
  | "balcony"
  | "check"
  | "key"
  | "building"
  | "pet"
  | "close"
  | "left"
  | "right"
  | "zoom"
  | "whatsapp"
  | "sun"
  | "play";
function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    kitchen: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M4 9h16M8 6h1m6 0h1" />
        <rect x="8" y="12" width="8" height="6" rx="1" />
      </>
    ),
    play: <path d="m9 5 11 7-11 7Z" />,
    home: (
      <>
        <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1Z" />
      </>
    ),
    pin: (
      <>
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14m-5-5 5 5-5 5" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
    ),
    share: (
      <>
        <path d="M12 15V3m-4 4 4-4 4 4M5 11H3v10h18V11h-2" />
      </>
    ),
    grid: (
      <>
        {[3, 14].flatMap((x) =>
          [3, 14].map((y) => <rect key={`${x}${y}`} x={x} y={y} width="7" height="7" rx="1" />),
        )}
      </>
    ),
    bed: (
      <>
        <path d="M3 19V8m18 11V8M3 16h18M3 12h18v4H3Zm2 0V5h14v7M7 8h3v4m4-4h3v4" />
      </>
    ),
    bath: (
      <>
        <path d="M3 12h18v3a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6Zm3 9v1m12-1v1M6 12V5a3 3 0 0 1 6 0v1H8" />
      </>
    ),
    balcony: (
      <>
        <path d="M2 12h20M4 12v9m4-9v9m4-9v9m4-9v9m4-9v9M3 21h18M6 9V3h12v6m-6-6v6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    key: (
      <>
        <circle cx="8" cy="8" r="5" />
        <path d="m12 12 9 9m-3-3 3-3m-6 0 3-3" />
      </>
    ),
    building: (
      <>
        <path d="M5 21V3h14v18M2 21h20M9 7h1m4 0h1M9 11h1m4 0h1M9 15h1m4 0h1m-4 6v-3h2v3" />
      </>
    ),
    pet: (
      <>
        <ellipse cx="12" cy="16" rx="5" ry="4" />
        <ellipse cx="5" cy="9" rx="2" ry="3" />
        <ellipse cx="11" cy="5" rx="2" ry="3" />
        <ellipse cx="18" cy="7" rx="2" ry="3" />
        <path d="m2 2 20 20" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    left: <path d="m15 5-7 7 7 7" />,
    right: <path d="m9 5 7 7-7 7" />,
    zoom: (
      <>
        <circle cx="10" cy="10" r="7" />
        <path d="m15 15 6 6M7 10h6m-3-3v6" />
      </>
    ),
    whatsapp: (
      <>
        <path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" />
        <path d="M8 7c-2 3 3 8 6 8l2-2-3-1-1 1-2-2 1-1-1-3Z" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l2 2m10 10 2 2M5 19l2-2M17 7l2-2" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

const photos = [
  {
    src: "living-portada",
    label: "Living",
    caption: "Living comedor con salida al balcón.",
  },
  {
    src: "cocina-completa",
    label: "Cocina",
    caption: "Cocina independiente con mesada, muebles y espacio de guardado.",
  },
  {
    src: "balcon-living",
    label: "Balcón",
    caption: "Vista desde el balcón hacia el living.",
  },
  {
    src: "living-espejo",
    label: "Living",
    caption: "Living comedor visto desde el balcón.",
  },
  {
    src: "toilette",
    label: "Toilette",
    caption: "Toilette del departamento.",
  },
  {
    src: "dormitorio",
    label: "Dormitorio",
    caption: "Un espacio para descansar, con luz natural y pisos de madera.",
  },
  {
    src: "cocina",
    label: "Cocina",
    caption: "Cocina con mesada de granito y espacio de guardado.",
  },
  { src: "bano", label: "Baño", caption: "Baño con bañera." },
  { src: "placard", label: "Placard", caption: "Placard con puertas corredizas." },
  { src: "ambiente", label: "Dormitorio", caption: "Otra mirada al dormitorio y su distribución." },
  { src: "vestidor", label: "Guardado", caption: "Espacio de guardado con estantes y cajones." },
  { src: "bano-ventana", label: "Baño", caption: "Ventilación y luz natural en el baño." },
  { src: "pasillo", label: "Distribución", caption: "Conexión entre los ambientes." },
  { src: "calefon", label: "Cocina", caption: "Detalle del calefón en la cocina." },
];
const whatsapp =
  "https://wa.me/5491144986694?text=" +
  encodeURIComponent(
    "¡Hola! Me interesa el departamento de 2 ambientes con balcón en Avellaneda centro. ¿Podrías darme más información?",
  );
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=General+Paz+entre+San+Martin+y+Avenida+Mitre+Avellaneda+Buenos+Aires";

export default function App() {
  const [toast, setToast] = useState("");
  const [modal, setModal] = useState<"gallery" | "photo" | "video" | null>(null);
  const [current, setCurrent] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [mobilePhoto, setMobilePhoto] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const photo = photos[current];

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 3200);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (modal) {
      if (!dialog?.open) dialog?.showModal();
      document.body.style.overflow = "hidden";
      closeRef.current?.focus();
    } else {
      dialog?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modal]);

  function move(direction: number) {
    setCurrent((index) => (index + direction + photos.length) % photos.length);
    setZoom(false);
  }
  function openPhoto(index: number) {
    setCurrent(index);
    setZoom(false);
    setModal("photo");
  }
  async function share() {
    try {
      if (navigator.share)
        await navigator.share({
          title: "Impecable 2 ambientes con balcón en Avellaneda centro",
          text: "Departamento super luminoso · Dueño directo",
          url: window.location.href,
        });
      else {
        await navigator.clipboard.writeText(window.location.href);
        setToast("Enlace copiado. Compartilo con quien quieras.");
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError")
        setToast("Podés copiar el enlace desde la barra de tu navegador.");
    }
  }

  return (
    <>
      <main className="page" id="departamento">
        <section className="listing-heading">
          <div>
            <div className="eyebrow">
              <span /> ALQUILER · DUEÑO DIRECTO
            </div>
            <h1>Impecable 2 ambientes con balcón en Avellaneda centro</h1>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="location-link">
              <Icon name="pin" size={16} /> General Paz entre San Martín y Av. Mitre · Avellaneda
              centro
            </a>
          </div>
          <button className="share-button" onClick={share} aria-label="Compartir departamento">
            <Icon name="share" size={18} />
            <span>Compartir</span>
          </button>
        </section>

        <section className="gallery-section" aria-label="Fotografías del departamento">
          <div
            className="photo-grid"
            onScroll={(event) => {
              const element = event.currentTarget;
              if (window.innerWidth <= 640)
                setMobilePhoto(Math.round(element.scrollLeft / element.clientWidth));
            }}
          >
            {photos.slice(0, 5).map((item, index) => (
              <button
                key={item.src}
                className={`photo-tile tile-${index}`}
                onClick={() => openPhoto(index)}
                aria-label={`Ampliar foto: ${item.label}`}
              >
                <img
                  src={`/images/${item.src}.jpg`}
                  alt={`${item.label} del departamento en Avellaneda`}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                <span className="photo-hover">
                  <Icon name="zoom" />
                </span>
              </button>
            ))}
          </div>
          <button className="video-button" onClick={() => setModal("video")}>
            <span className="play-icon">
              <Icon name="play" size={17} />
            </span>
            Ver recorrido <span className="video-duration">0:30 · Sin sonido</span>
          </button>
          <button className="all-photos" onClick={() => setModal("gallery")}>
            <Icon name="grid" size={16} />
            <span>Ver todas las fotos</span>
            <span className="photo-count">{photos.length}</span>
          </button>
          <span className="mobile-counter">{mobilePhoto + 1} / 5</span>
        </section>

        <section className="flyer-details" aria-label="Información del departamento">
          <div className="flyer-description">
            <div className="quick-features">
              <span>
                <Icon name="bed" size={21} />1 dormitorio
              </span>
              <span>
                <Icon name="home" size={20} />
                Living
              </span>
              <span>
                <Icon name="kitchen" size={21} />
                Cocina
              </span>
              <span>
                <Icon name="bath" size={21} />2 baños
              </span>
              <span>
                <Icon name="balcony" size={21} />
                Balcón al contrafrente
              </span>
              <span>
                <Icon name="home" size={20} />
                50 m² totales aprox.
              </span>
              <span>
                <Icon name="sun" size={20} />
                Super luminoso
              </span>
            </div>
            <h2 className="description-title">Descripción</h2>
            <p>
              Impecable departamento de <strong>2 ambientes, super luminoso</strong>, en Avellaneda
              centro. Tiene living comedor con balcón al contrafrente, dormitorio, cocina
              independiente y dos baños. Superficie total aproximada de <strong>50 m²</strong>.
            </p>
            <p>
              Está en buen estado, en un edificio de aproximadamente 10 años, sobre General Paz
              entre San Martín y Avenida Mitre. Alquiler de <strong>dueño directo</strong>.
            </p>
            <div className="pet-note">
              <Icon name="pet" size={17} />
              No se aceptan mascotas.
            </div>
          </div>
          <div className="flyer-contact">
            <div className="pricing-card" aria-label="Valores del alquiler">
              <span className="pricing-label">Alquiler mensual</span>
              <strong>$750.000</strong>
              <div className="pricing-details">
                <span>
                  Expensas <b>$260.000</b>
                </span>
                <span>
                  Superficie total <b>50 m² aprox.</b>
                </span>
                <span>
                  Ajuste <b>Trimestral por IPC</b>
                </span>
              </div>
            </div>
            <p>
              ¿Querés conocerlo? <span>Escribime.</span>
            </p>
            <a className="primary-button" href={whatsapp} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={22} />
              Consultar por WhatsApp
              <Icon name="arrow" size={18} />
            </a>
            <a className="phone-link" href="tel:+541144986694">
              11 4498-6694
            </a>
          </div>
        </section>

        <section className="flyer-map" aria-labelledby="map-title">
          <div className="map-heading">
            <div>
              <h2 id="map-title">En el corazón de Avellaneda</h2>
              <p>General Paz entre San Martín y Avenida Mitre · Avellaneda centro, Buenos Aires</p>
            </div>
            <a href={mapUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps <Icon name="arrow" size={17} />
            </a>
          </div>
          <iframe
            title="Mapa de General Paz entre San Martín y Avenida Mitre, Avellaneda centro"
            src="https://maps.google.com/maps?q=General+Paz+entre+San+Martin+y+Avenida+Mitre%2C+Avellaneda%2C+Buenos+Aires%2C+Argentina&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          <p className="map-caption">
            <Icon name="pin" size={14} />
            Ubicación de referencia de la esquina. Consultá la dirección exacta por WhatsApp.
          </p>
        </section>
      </main>

      {toast && (
        <div className="toast" role="status">
          <Icon name="check" size={18} />
          {toast}
        </div>
      )}

      <dialog
        ref={dialogRef}
        className={`photo-dialog ${modal === "photo" || modal === "video" ? "viewer-dialog" : ""}`}
        aria-label={
          modal === "video" ? "Recorrido del departamento sin sonido" : "Galería del departamento"
        }
        onCancel={() => setModal(null)}
        onKeyDown={(event) => {
          if (modal === "photo" && event.key === "ArrowRight") move(1);
          if (modal === "photo" && event.key === "ArrowLeft") move(-1);
        }}
      >
        <div className="dialog-header">
          <button ref={closeRef} className="dialog-back" onClick={() => setModal(null)}>
            <Icon name="close" size={20} />
            <span>Cerrar</span>
          </button>
          <span>
            {modal === "gallery"
              ? `${photos.length} fotos · 1 video`
              : modal === "video"
                ? "Recorrido · Sin sonido"
                : `${current + 1} / ${photos.length} · ${photo.label}`}
          </span>
          {modal === "photo" || modal === "video" ? (
            <button
              className="dialog-back"
              onClick={() => {
                setZoom(false);
                setModal("gallery");
              }}
            >
              <Icon name="grid" size={19} />
              <span>Ver galería</span>
            </button>
          ) : (
            <span className="dialog-total">Avellaneda centro</span>
          )}
        </div>
        {modal === "gallery" ? (
          <div className="gallery-scroll">
            <div className="gallery-intro">
              <h2>Conocé el departamento</h2>
              <p>Ampliá las fotos o mirá el recorrido sin sonido.</p>
              <button className="gallery-video-link" onClick={() => setModal("video")}>
                <Icon name="play" size={18} />
                Ver video<span>0:30 · Sin sonido</span>
              </button>
            </div>
            <div className="all-photo-grid">
              {photos.map((item, index) => (
                <figure key={item.src}>
                  <button onClick={() => openPhoto(index)} aria-label={`Ampliar ${item.label}`}>
                    <img src={`/images/${item.src}.jpg`} alt={item.caption} loading="lazy" />
                    <span>
                      <Icon name="zoom" />
                    </span>
                  </button>
                  <figcaption>
                    <strong>{item.label}</strong>
                    <span>{item.caption}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : modal === "video" ? (
          <div className="video-viewer">
            <video
              key="recorrido"
              controls
              autoPlay
              muted
              playsInline
              preload="metadata"
              poster="/images/recorrido-poster.jpg"
              aria-label="Recorrido de 30 segundos por el departamento, sin sonido"
            >
              <source src="/videos/recorrido.mp4" type="video/mp4" />
              Tu navegador no puede reproducir este video.{" "}
              <a href="/videos/recorrido.mp4">Descargá el recorrido sin sonido.</a>
            </video>
          </div>
        ) : (
          modal === "photo" && (
            <div className="viewer">
              <div className={`viewer-image-area ${zoom ? "zoomed" : ""}`}>
                <button
                  className="viewer-photo"
                  onClick={() => setZoom(!zoom)}
                  aria-label={zoom ? "Reducir imagen" : "Ampliar imagen"}
                >
                  <img src={`/images/${photo.src}.jpg`} alt={photo.caption} />
                </button>
              </div>
              <button
                className="viewer-prev circle-button"
                onClick={() => move(-1)}
                aria-label="Foto anterior"
              >
                <Icon name="left" size={23} />
              </button>
              <button
                className="viewer-next circle-button"
                onClick={() => move(1)}
                aria-label="Foto siguiente"
              >
                <Icon name="right" size={23} />
              </button>
              <div className="viewer-caption">
                <p>{photo.caption}</p>
                <button onClick={() => setZoom(!zoom)} aria-pressed={zoom}>
                  <Icon name="zoom" size={18} />
                  {zoom ? "Reducir" : "Ampliar"}
                </button>
              </div>
              <div className="thumbnails">
                {photos.map((item, index) => (
                  <button
                    key={item.src}
                    className={current === index ? "active" : ""}
                    onClick={() => {
                      setCurrent(index);
                      setZoom(false);
                    }}
                    aria-label={`Ver foto ${index + 1}: ${item.label}`}
                    aria-pressed={current === index}
                  >
                    <img src={`/images/${item.src}.jpg`} alt="" />
                  </button>
                ))}
              </div>
            </div>
          )
        )}
      </dialog>
    </>
  );
}

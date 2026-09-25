import Image from "next/image";

const meetImages = [
  {
    src: "/meet1.jpg",
    alt: "Dr Himanshu Verma with the President of Mauritius at State House, Réduit",
  },
  {
    src: "/meet2.jpg",
    alt: "Presenting the book You Were Our Best Teachers to the President of Mauritius",
  },
  {
    src: "/meet3.jpg",
    alt: "Presenting the book You Were Our Best Teachers to the President of Mauritius",
  },
  {
    src: "/meet4.jpg",
    alt: "Presenting the book You Were Our Best Teachers to the President of Mauritius",
  },
];

export default function MauritiusWorkshop() {
  return (
    <section className="py-12 bg-[var(--med-light)]">
      <div className="w-11/12 md:w-5/6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <div data-aos="fade-right" className="space-y-4">
            <span className="inline-flex items-center rounded-full border border-[var(--med-primary)]/20 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--med-primary)]">
              18th AVF Care Workshop • Mauritius
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-[var(--med-primary)] leading-tight">
              Received by the President of Mauritius at State House, Réduit
            </h2>

            <div className="space-y-2">
              <p className="text-[var(--med-text)]/80 leading-relaxed text-justify">
                On 24 August, the day after the 18th AVF Care Workshop in
                Quatre Bornes,{" "}
                <strong className="text-[var(--med-text)]">
                  His Excellency Mr Dharambeer Gokhool, G.C.S.K., President of
                  the Republic of Mauritius
                </strong>
                , received us at State House, Réduit.
              </p>

              <p className="text-[var(--med-text)]/80 leading-relaxed text-justify">
                I am grateful for the time he gave us. We spoke about the
                workshop held the previous morning at the Town Hall of the
                Municipality of Quatre Bornes, the first in this series outside
                India, where dialysis patients, their families and dialysis
                staff learned to check a fistula with a stethoscope in under a
                minute. And we spoke about why creating a fistula is only half
                the work. Keeping it alive is the other half.
              </p>

              <p className="text-[var(--med-text)]/80 leading-relaxed text-justify">
                I also had the privilege of presenting the President with a
                copy of{" "}
                <em className="font-semibold text-[var(--med-primary)]">
                  &ldquo;You Were Our Best Teachers&rdquo;
                </em>
                , our book on what dialysis patients have taught us about
                looking after their fistulas, and a small memento from the
                workshop.
              </p>

              <p className="text-[var(--med-text)]/80 leading-relaxed text-justify">
                With me were{" "}
                <strong className="text-[var(--med-text)]">
                  Mr Bose Soonarane, OSK, President of the Renal Disease
                  Patients&apos; Association
                </strong>
                , whose members first asked for this workshop in Mauritius, and
                Chanderkanta, who was on the ground in Mauritius and organised
                the workshop, the meetings and everything in between. Very
                little of that week would have happened without her.
              </p>

              <div className="rounded-2xl border border-[var(--med-border)] bg-white p-4 shadow-sm">
                <p className="text-[var(--med-text)]/85 text-justify leading-relaxed">
                  My thanks to the President and to his office for the courtesy
                  shown to us throughout.
                </p>
                <p className="mt-3 font-semibold text-[var(--med-primary)]">
                  Dr Himanshu Verma, MS, FEVS
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-left" className="grid grid-cols-1 sm:grid-cols-2">
            {meetImages.map((img) => (
              <div
                key={img.src}
                className="relative h-56 sm:h-64 overflow-hidden border border-[var(--med-border)] shadow-lg"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

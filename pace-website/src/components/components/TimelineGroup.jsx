import Image from "next/image";
import React from "react";
import { Timeline } from "../ui/timeline";

export default function TimelineGroup() {
  const data = [
    {
      title: "2015",
      content: (
        <div>
          <p className="timemainheading">
            Establishment of <span>PACE</span>
          </p>
          <p className="timemainparagraph">
            <span className="timeline_bold_span">PACE</span> started its journey
            by introducing the Kid's brand -{" "}
            <span className="timeline_bold_span">Cot and Candy</span> in the
            year 2015.
          </p>
          <div className="grid grid-cols-1 gap-4 timemainImagesContainer">
            <Image
              src="/main/timeline_2015.png"
              alt="startup template"
              width={980}
              height={350}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020",
      content: (
        <div>
          <p className="timemainheading">Homepost Introduced</p>
          <p className="timemainparagraph">
            <span className="timeline_bold_span">PACE</span> entered the Home
            and furnishing market with{" "}
            <span className="timeline_bold_span">HOMEPOST</span> in the year
            2020.
          </p>
          <div className="grid gap-4 timemainImagesContainer">
            <Image
              src="/main/timeline_2020.png"
              alt="startup template"
              width={980}
              height={350}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="timemainheading">Launching of OSTILOS</p>
          <p className="timemainparagraph">
            Entered into the world of{" "}
            <span className="timeline_bold_span">FASHION</span> by introducing{" "}
            <span className="timeline_bold_span">OSTILOS</span> in 2023.
          </p>
          <div className="grid gap-4 timemainImagesContainer">
            <Image
              src="/main/timeline_2023.png"
              alt="startup template"
              width={980}
              height={350}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="timemainheading">
            Launch of ZWANKEE, WISHROWS, ZWANKEE GLOBAL and PACE PRINT
            INNOVATIONS.
          </p>
          <p className="timemainparagraph">
            Making a strong entry into the segment of{" "}
            <span className="timeline_bold_span">B2B</span>,{" "}
            <span className="timeline_bold_span">Fast-fashion</span> and
            <span className="timeline_bold_span"> Print-on-demand</span> in
            2024.
          </p>
          <div className="grid grid-cols-2 gap-4 timemainImagesContainer">
            <Image
              src="/main/timeline_2024_1.png"
              alt="startup template"
              width={477.5}
              height={477.5}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/main/timeline_2024_2.png"
              alt="startup template"
              width={477.5}
              height={477.5}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/main/timeline_2024_3.png"
              alt="startup template"
              width={477.5}
              height={477.5}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/main/timeline_2024_4.png"
              alt="startup template"
              width={477.5}
              height={477.5}
              className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

import Reveal from "../Reveal/Reveal";
import SectionHeader from "../SectionHeader/SectionHeader";
import ExperienceItem from "./ExperienceItem";
import { iPolish } from "../types";
import React from "react";

const expirience = [
  {
    company: "Nobu",
    location: "Warsaw",
    position: "Sushi Chef",
    positionPl: "Sushi Chef",
    time: "02/2022 - now",
  },
  {
    company: "KPS Food",
    location: "Warsaw",
    position: "Regional Sales Manager",
    positionPl: "Kierownik Rejonu Sprzedaży",
    time: "02/2022 - 10/2022",
    text: "Managed sales in my region, grew the customer base, and built strong relationships to achieve business goals.",
    textPl:
      "Zarządzałem sprzedażą w moim regionie, rozwijałem bazę klientów i budowałem silne relacje w celu osiągnięcia celów biznesowych.",
    description: (
      <>
        {" "}
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Maximized Profit Margins
            </span>{" "}
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Expanded Client Base
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Market Analysis
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Relationship Management
            </span>
          </p>
        </Reveal>
      </>
    ),
    descriptionPl: (
      <>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Maksymalizacja zysku
            </span>{" "}
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Poszerzenie bazy klientów
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Analiza rynku
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Zarządzanie relacjami z klientami
            </span>
          </p>
        </Reveal>
      </>
    ),
  },
  {
    company: "Bogmar-Traper",
    location: "Warsaw",
    position: "Sales Representative",
    positionPl: "Przedstawiciel Handlowy",
    time: "07/2021 - 02/2022",
    text: "Handled customer accounts, promoted products, and closed sales to meet company targets",
    textPl:
      "Pozyskiwałem nowych klientów, negocjowałem warunki i finalizowałem transakcje, zapewniając wsparcie i wysoką satysfakcję",
    description: (
      <>
        <Reveal>
          {" "}
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Customer Acquisition
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Sales Negotiation
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Customer Support
            </span>
          </p>
        </Reveal>
      </>
    ),
    descriptionPl: (
      <>
        <Reveal>
          {" "}
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              Pozyskiwanie Klientów
            </span>
          </p>
        </Reveal>
        <Reveal>
          <p className="my-2">
            {" "}
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Negocjacje Sprzedażowe
            </span>
          </p>
        </Reveal>
        <Reveal>
          {" "}
          <p className="my-2">
            <span className="mr-1 rounded bg-neutral px-2 py-1 font-semibold text-zinc-100">
              {" "}
              Wsparcie Klienta
            </span>
          </p>
        </Reveal>
      </>
    ),
  },
];

const Experience: React.FC<iPolish> = ({ isPolish }) => {
  return (
    <section id="experience" className="section-wrapper">
      <SectionHeader
        title={isPolish ? "Doświadczenie" : "Experience"}
        side="right"
      />
      <div className="relative grid grid-cols-1 gap-8">
        {expirience.map((item) => {
          return (
            <ExperienceItem
              isPolish={isPolish}
              key={item.company}
              company={item.company}
              time={item.time}
              position={isPolish ? item.positionPl : item.position}
              text={isPolish ? item.textPl ?? "" : item.text ?? ""}
              description={isPolish ? item.descriptionPl : item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Experience;

import FCard from "./FCard";

export default function FinancialCalender() {
  return (
    <>
      <section className="financialCalender page-width pt-[7.5rem] pb-[7.5rem]">
        <h1>Financial Calendar</h1>
        <section className="financialCalenderGrid mt-[5rem]">
          <div className="flex items-center">
            <FCard
              style={{
                borderTop: "1px solid var(--gray_700)",
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderTop: "1px solid var(--gray_700)",
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderTop: "1px solid var(--gray_700)",
                borderBottom: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
          </div>
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
          </div>
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"January"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, January 23, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "45.3rem",
              }}
              // month={"January"}
              // year={2024}
              // name={"Publications of Key Figures 2023"}
              // time={"Tuesday, January 23, 2024"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

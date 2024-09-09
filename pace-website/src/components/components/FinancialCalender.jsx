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
              month={"March"}
              year={2024}
              name={"Publication of Annual Report 2023"}
              time={"Thursday, March 21, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
              }}
              month={"March"}
              year={2024}
              name={"Media Conference on Results 2023"}
              time={"Thursday, March 21, 2024"}
            />
          </div>
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"April"}
              year={2024}
              name={
                <>
                  Closing of share <br /> Register
                </>
              }
              time={"Wednesday, April 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"May"}
              year={2024}
              name={
                <>
                  Record <br /> Date
                </>
              }
              time={"Tuesday, May 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
              }}
              month={"May"}
              year={2024}
              name={"Ordinary General Meetings of Share holders"}
              time={"Monday, May 08, 2024"}
            />
          </div>
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"May"}
              year={2024}
              name={"Publications of Key Figures 2023"}
              time={"Tuesday, May 18, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
              }}
              month={"July"}
              year={2024}
              name={"Publications of 2024 Half-year Results"}
              time={"Monday, July 15, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "45.3rem",
              }}
              // month={"May"}
              // year={2024}
              // name={"Ordinary General Meetings of Share holders"}
              // time={"Monday, May 08, 2024"}
            />
          </div>
        </section>
      </section>
    </>
  );
}

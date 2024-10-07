import FCard from "./FCard";

export default function FinancialCalender() {
  return (
    <>
      <section className="financialCalender page-width pt-[7.5rem] pb-[7.5rem]">
        <h1>Financial Calendar</h1>
        <section className="financialCalenderGrid mt-[5rem]">
          <div className="flex items-center">
            {/* april 2024 */}
            <FCard
              className="first__fcard"
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"April"}
              year={2024}
              name={
                "Yearly and quarterly compliances for Quarter and Year ended 31st March, 2024."
              }
              // time={"Tuesday, January 23, 2024"}
            />
            <FCard
              className="first__fcard"
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"April"}
              year={2024}
              name={
                "Closure of Trading Window for Half and Year ended 31st March, 2024."
              }
              // time={"Tuesday, January 23, 2024"}
            />

            {/* may 2024 */}

            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"May"}
              year={2024}
              name={
                "Publication of Half year and Year end results for FY 2023-24."
              }
              // time={"Thursday, March 21, 2024"}
            />
          </div>
          <div className="flex items-center">
            {/* june 2024 */}
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"June"}
              year={2024}
              name={<>Closure of Q1 FY 2024-25.</>}
              // time={"Wednesday, April 01, 2024"}
            />
            {/* July, 2024 */}
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"July"}
              year={2024}
              name={
                <>Quarterly compliances for Quarter ended on 30th June, 2024.</>
              }
              // time={"Tuesday, May 01, 2024"}
            />
            {/* August, 2024 */}
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"August"}
              year={2024}
              name={"No such event was undertaken."}
              // time={"Monday, May 08, 2024"}
            />
          </div>

          {/* third -> September, 2024 */}
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={<>Approve Board’s Report</>}
              // time={"Wednesday, April 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={<>Closure of Record Date.</>}
              // time={"Tuesday, May 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={"Consider Alteration of Memorandum of Association."}
              // time={"Monday, May 08, 2024"}
            />
          </div>

          {/* four -> September, 2024 */}
          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={
                <>
                  Approve AGM date, time & notice and Annual Report for FY
                  2023-24
                </>
              }
              // time={"Wednesday, April 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={<>Annual General Meeting held on 27.09.2024.</>}
              // time={"Tuesday, May 01, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={
                "Closure of Q2 FY 2024-25 and half-year ended on 30th September, 2024."
              }
              // time={"Monday, May 08, 2024"}
            />
          </div>

          <div className="flex items-center">
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              month={"September"}
              year={2024}
              name={
                <>
                  Closure of Trading Window for Half-Year and Year ended 30th
                  September, 2024.
                </>
              }
              // time={"Tuesday, May 18, 2024"}
            />
            <FCard
              style={{
                borderBottom: "1px solid var(--gray_700)",
                borderRight: "1px solid var(--gray_700)",
                height: "36.3rem",
              }}
              // month={"July"}
              // year={2024}
              // name={"Publications of 2024 Half-year Results"}
              // time={"Monday, July 15, 2024"}
            />
            <FCard
              className="last__fcard"
              style={{
                borderBottom: "1px solid var(--gray_700)",
                height: "36.3rem",
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

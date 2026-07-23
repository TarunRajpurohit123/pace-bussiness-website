export default function InvestorStatics() {
  const stats = [
    {
      value: "₹7,213.87 lacs",
      label: "Revenue 2024-25",
    },
    {
      value: "6",
      label: "Brands in portfolio",
    },
    {
      value: "₹330.82 lacs",
      label: "Net profit, Group Share 2024-25",
    },
  ];

  return (
    <section className="stat-box-container py-8 md:py-[15rem] my-8 md:my-16 w-full max-w-full overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex-1 flex items-center justify-center relative w-full border-b md:border-b-0 border-[#2C2C2E]/60 pb-6 md:pb-0 last:border-b-0 last:pb-0"
          >
            <div className="text-center px-4">
              <h2 className="stat-number-text mb-2">
                {stat.value}
              </h2>
              <p className="stat-label-text">
                {stat.label}
              </p>
            </div>
            {index < stats.length - 1 && (
              <span className="hidden md:block absolute right-0 stat-divider-line" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

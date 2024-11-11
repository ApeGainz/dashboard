import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Asset, Other } from "@/app/lib/types";

ChartJS.register(ArcElement, Tooltip, Legend);

export const AssetDoughnutChart = ({
  data,
  colors,
}: {
  data: (Asset | Other)[];
  colors: string[];
}) => (
  <div className="w-full items-center flex">
    {data && (
      <Doughnut
        data={{
          labels: data.map((asset) => asset.tokenName),
          datasets: [
            {
              data: data.map((asset) => parseFloat(asset.usdValue)),
              backgroundColor: colors,
              borderWidth: 0,
              spacing: 5,
              borderRadius: 10,
            },
          ],
        }}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
            legend: { display: false },
          },
          cutout: "60%",
        }}
      />
    )}
  </div>
);

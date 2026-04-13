import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
} from "recharts";

const PageChart = ({ wishBookList }) => {
  if (wishBookList.length === 0) {
    return (
      <div className="bg-base-200 h-[50vh] flex justify-center items-center rounded-2xl mb-10">
        <h1 className="text-2xl font-semibold">No Book Added Yet</h1>
      </div>
    );
  }

  return (
    <div className="h-[80dvh] flex items-center bg-base-200 rounded-2xl px-5 md:px-15 pt-10">
      <div style={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer>
          <BarChart data={wishBookList}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="bookName"
              angle={-50}
              textAnchor="end"
              interval={0}
              height={250}
            />
            <YAxis />
            <Tooltip />
            <Bar dataKey="totalPages" radius={[10, 100, 10, 100]}>
              {wishBookList?.map((entry, index) => (
                <Cell
                  key={index}
                  fill={index % 2 === 0 ? "#1f2a44" : "#e07a3f"}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PageChart;

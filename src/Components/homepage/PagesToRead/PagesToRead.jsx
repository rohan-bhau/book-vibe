import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

import { getWishListFromLocalDB } from "../../../utils/LocalDBforWishList";

// custom triangle shape
const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  const path = `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y}
     ${x + width / 2},${y}
    C${x + width / 2},${y}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;

  return <path d={path} fill={fill} />;
};

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF0000"];

const PagesToRead = () => {
  const wishlist = getWishListFromLocalDB()

  const chartData = wishlist.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  return (
    <BarChart className="mt-15" width={900} height={400} data={chartData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />

      <Bar dataKey="pages" shape={<TriangleBar />} label={{ position: "top" }}>
        {chartData.map((entry, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Bar>
    </BarChart>
  );
};

export default PagesToRead;

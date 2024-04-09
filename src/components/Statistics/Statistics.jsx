import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";


// eslint-disable-next-line react/prop-types
export default function Statistics({data}) {

    // const data01 = [
    //     { name: 'Group A', value: 400 },
    //     { name: 'Group B', value: 300 },
    //     { name: 'Group C', value: 300 },
    //     { name: 'Group D', value: 200 },
    //     { name: 'Group E', value: 278 },
    //     { name: 'Group F', value: 189 },
    // ];

    // const data = [
    //     { name: 'Group A', value: 2000 },
    //     { name: 'Group B', value: 4567 },
    //     // { name: 'Group C', value: 1398 },
    //     // { name: 'Group D', value: 9800 },
    //     // { name: 'Group E', value: 3908 },
    //     // { name: 'Group F', value: 40 },
    // ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <ResponsiveContainer width="100%" height="100%" className="border-0">
            <PieChart className="border-0" width={1000} height={1000}>
                {/* <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                /> */}
                <Pie
                    dataKey="value"
                    data={data}
                    cx={350}
                    cy={250}
                    innerRadius={80}
                    outerRadius={100}
                    fill="#82ca9d"
                    label
                    // paddingAngle={0}
                    // className="bg-success"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    )
}

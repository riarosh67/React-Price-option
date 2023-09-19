import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const studentData = [
        { id: 1, name: "John", physics: 85, chemistry: 75, math: 92 },
        { id: 2, name: "Emily", physics: 78, chemistry: 88, math: 85 },
        { id: 3, name: "Michael", physics: 92, chemistry: 80, math: 91 },
        { id: 4, name: "Sophia", physics: 88, chemistry: 94, math: 78 },
        { id: 5, name: "William", physics: 65, chemistry: 72, math: 89 },
        { id: 6, name: "Olivia", physics: 72, chemistry: 68, math: 76 },
        { id: 7, name: "James", physics: 96, chemistry: 89, math: 94 },
        { id: 8, name: "Emma", physics: 89, chemistry: 78, math: 82 },
        { id: 9, name: "Benjamin", physics: 75, chemistry: 81, math: 70 },
        { id: 10, name: "Ava", physics: 81, chemistry: 90, math: 88 }
      ];
      
      
    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis ></YAxis>
            <Line dataKey="math" stroke='red'></Line>
            <Line dataKey="chemistry" stroke='yellow'></Line>
            <Line dataKey="physics" stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
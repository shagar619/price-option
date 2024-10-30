import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


    const studentMarks = [
        { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 76 },
        { id: 2, name: "Bob", math: 85, physics: 88, chemistry: 79 },
        { id: 3, name: "Charlie", math: 92, physics: 91, chemistry: 89 },
        { id: 4, name: "David", math: 68, physics: 74, chemistry: 70 },
        { id: 5, name: "Eva", math: 74, physics: 79, chemistry: 72 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 84 },
        { id: 7, name: "Grace", math: 95, physics: 92, chemistry: 94 },
        { id: 8, name: "Henry", math: 81, physics: 87, chemistry: 80 },
        { id: 9, name: "Ivy", math: 90, physics: 89, chemistry: 85 },
        { id: 10, name: "Jack", math: 76, physics: 78, chemistry: 73 }
      ];
      

      


    return (
        <div>

            <h2 className='text-4xl mb-8'>This is a line chart</h2>

            <LChart width={800} height={400} data={studentMarks}>
                <XAxis dataKey={'name'} />
                <YAxis />
            <Line dataKey='math' stroke='#01161e' />
            <Line dataKey='physics' stroke='#5f0f40' />
            <Line dataKey='chemistry' stroke='#d90429' />
            </LChart>

        </div>
    );
};

export default LineChart;